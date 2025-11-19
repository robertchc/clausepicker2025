/* eslint-disable no-undef */

/**
 * Update status text in the task pane (if present)
 */
function setStatus(msg) {
  const el = document.getElementById("status");
  if (el) {
    el.textContent = msg || "";
  }
}

/**
 * Determines if text looks like a list item marker (e.g., "1.", "(a)", "•")
 */
function isLikelyList(text) {
  const listRegex = /^(\d+\.|\([a-z]\)|[•\u2022])/;
  return listRegex.test(text.trim());
}

/**
 * Converts newlines to <br/> for HTML insertion
 */
function nl2br(s) {
  return String(s)
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "<br/>");
}

/**
 * Core: insert a clause into Word.
 * clause = { text: string|null, html: string|null, isTable: boolean, tableData: {header, rows}|null }
 */
async function insertClauseIntoWord(clause) {
  const { text, html, isTable, tableData } = clause;

  try {
    await Word.run(async (context) => {
      const range = context.document.getSelection();

      if (isTable) {
        // --- TABLE INSERTION BRANCH ---

        const header = tableData.header;
        const rows = tableData.rows;

        const table = range.insertTable(
          rows.length + 1,
          header.length,
          Word.InsertLocation.replace
        );

        table.values = [header].concat(rows);
        table.style = "Table Grid";
        table.styleFirstColumn = false;
        table.styleLastColumn = false;

        const after = table.insertParagraph("", Word.InsertLocation.after);
        after.select("End");
      } else {
        // --- TEXT / HTML INSERTION BRANCH ---

        // Prefer clause.html when present, otherwise fall back to clause.text
        let contentToInsert = html || text;

        // 1. Replace «placeholder» tokens with content controls
        const placeholderRegex = /«(.*?)»/g;
        let match;

        while ((match = placeholderRegex.exec(contentToInsert)) !== null) {
          const placeholder = match[1];

          const contentControl = range.insertContentControl();
          contentControl.insertText(placeholder, Word.InsertLocation.replace);
          contentControl.tag = placeholder;

          // Remove the original «placeholder» tokens from the string
          contentToInsert = contentToInsert.replace(match[0], "");
        }

        // 2. Insert remaining content
        if (html) {
          // Has explicit HTML – insert as HTML
          range.insertHtml(contentToInsert, Word.InsertLocation.replace);
        } else if (isLikelyList(contentToInsert)) {
          // Looks like a list but is plain text – wrap in <p> and preserve line breaks
          range.insertHtml(
            "<p>" + nl2br(contentToInsert) + "</p>",
            Word.InsertLocation.replace
          );
        } else if (contentToInsert.includes("\n")) {
          // Multiline plain text – also wrap in <p> and convert newlines
          range.insertHtml(
            "<p>" + nl2br(contentToInsert) + "</p>",
            Word.InsertLocation.replace
          );
        } else {
          // Simple one-line text
          range.insertText(contentToInsert, Word.InsertLocation.replace);
        }

        // 3. Move cursor after inserted content
        const newParagraph = range.insertParagraph("", Word.InsertLocation.after);
        newParagraph.select("End");
      }

      await context.sync();
    });

    setStatus("Inserted.");
  } catch (err) {
    console.error(err);
    setStatus("Error: " + (err && err.message ? err.message : String(err)));
  }
}

/**
 * Wire up all clause-item elements to insert into Word on click.
 */
function wireClauseButtons() {
  document.querySelectorAll(".clause-item").forEach((el) => {
    el.addEventListener("click", () => {
      const isTable = el.classList.contains("clause-table");
      const isMultiline = el.classList.contains("clause-multiline");

      const clause = {
        isTable,
        text: null,
        html: null,
        tableData: null,
      };

      if (isTable) {
        // Expect structured data in a data-table attribute, if present
        const tableJson = el.getAttribute("data-table");

        if (tableJson) {
          try {
            clause.tableData = JSON.parse(tableJson);
          } catch (err) {
            console.error(
              "Failed to parse table JSON for insertion. Element:",
              el,
              err
            );
            setStatus("Error: Invalid table data format in HTML.");
            return;
          }
        } else {
          // Fallback: just insert the text if no JSON is provided
          clause.text = el.textContent.trim();
        }
      } else if (isMultiline || el.querySelector("ul, ol")) {
        // Multiline / list clauses – preserve HTML structure
        clause.html = el.innerHTML;
      } else {
        // Simple line clause – use plain text
        clause.text = el.textContent.trim();
      }

      if (clause.text || clause.html || clause.tableData) {
        insertClauseIntoWord(clause);
      } else {
        console.warn("Attempted to insert empty clause:", el);
      }
    });
  });
}

/**
 * Wire up expand/collapse on all heading toggles.
 */
function wireToggles() {
  const toggles = document.querySelectorAll(
    ".category-toggle, .subcategory-toggle, .subsubcategory-toggle"
  );

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("expanded");

      const content = toggle.nextElementSibling;
      if (!content) return;

      if (toggle.classList.contains("expanded")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
}

/**
 * Main initialization: wire headings and clauses, set Ready status.
 */
function start() {
  wireToggles();
  wireClauseButtons();
  setStatus("Ready.");
}

/**
 * Office bootstrap: run start() when both Office and DOM are ready.
 */
Office.onReady((info) => {
  if (info.host !== Office.HostType.Word) return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
});
