/* eslint-disable no-undef */

// --- HELPER FUNCTIONS ---

function setStatus(msg) {
  const el = document.getElementById('status');
  if (el) el.textContent = msg || '';
}

// Determines if text looks like a list item marker (e.g., 1., (a), •)
function isLikelyList(text) {
  const listRegex = /^(\d+\.|\([a-z]\)|[•\u2022])/; 
  return listRegex.test(text.trim());
}

// Converts newlines to <br/> for HTML insertion
function nl2br(s) {
  return String(s).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>");
}

// --- CORE INSERTION LOGIC ---
import './taskpane.css'; // OR import './styles/taskpane.css' (adjust the path if your CSS file is elsewhere)
/* eslint-disable no-undef */

// ... rest of your taskpane.js code

async function insertClauseIntoWord(clause) {
    // clause object now contains: { text: string, html: string, isTable: boolean }
    const { text, html, isTable, tableData } = clause;
    
    try {
        await Word.run(async (context) => {
            const range = context.document.getSelection();

            if (isTable) {
                // Table insertion logic (from your NEW file)
                const header = tableData.header;
                const rows = tableData.rows;
                const table = range.insertTable(rows.length + 1, header.length, Word.InsertLocation.replace);
                table.values = [header, ...rows];
                table.style = "Table Grid";
                table.styleFirstColumn = false;
                table.styleLastColumn = false;
                const after = table.insertParagraph("", Word.InsertLocation.after);
                after.select("End");
            } else {
                // Text/HTML insertion logic (improved with Content Controls and List handling from OLD file)
                let contentToInsert = html || text;

                // 1. Handle Placeholders (like «$Amount») by converting them to Content Controls
                const placeholderRegex = /«(.*?)»/g; 
                let match;

                while ((match = placeholderRegex.exec(contentToInsert)) !== null) {
                    const placeholder = match[1];
                    // Insert the placeholder text into a new Content Control at the current range
                    const contentControl = range.insertContentControl();
                    contentControl.insertText(placeholder, Word.InsertLocation.replace);
                    contentControl.tag = placeholder;
                    
                    // Remove the placeholder from the remaining content string
                    contentToInsert = contentToInsert.replace(match[0], ""); 
                }

                // 2. Insert the remaining content
                
                // If the content is simple text, check for list format or wrap in <p>
                if (html) {
                    // Content with inner HTML (like <p> or <ul>)
                    range.insertHtml(contentToInsert, Word.InsertLocation.replace);
                } else if (isLikelyList(contentToInsert)) {
                    // Simple text list formatting (can be skipped if you use clause-multiline for lists)
                    // The original "isList" logic was complex. We'll use the HTML for robust lists.
                    // For safety, we treat simple lists as paragraphs with line breaks:
                    range.insertHtml("<p>" + nl2br(contentToInsert) + "</p>", Word.InsertLocation.replace);
                } else if (contentToInsert.includes("\n")) {
                    // Multiline plain text
                    range.insertHtml("<p>" + nl2br(contentToInsert) + "</p>", Word.InsertLocation.replace);
                } else {
                    // Single line plain text
                    range.insertText(contentToInsert, Word.InsertLocation.replace);
                }
                
                // 3. Move cursor after the inserted content
                const newParagraph = range.insertParagraph("", Word.InsertLocation.after);
                newParagraph.select("End");
            }

            await context.sync();
        });
        setStatus("Inserted.");
    } catch (err) {
        console.error(err);
        setStatus('Error: ' + (err && err.message ? err.message : String(err)));
    }
}


// --- FUNCTION TO WIRE EXISTING HTML ELEMENTS ---

function wireClauseButtons() {
    // Target all elements that represent a clause
    document.querySelectorAll(".clause-item").forEach((clauseElement) => {
        clauseElement.addEventListener("click", () => {
            const isTable = clauseElement.classList.contains("clause-table");
            const isMultiline = clauseElement.classList.contains("clause-multiline");

            const clause = {
                isTable: isTable,
                text: null,
                html: null,
                tableData: null
            };

            if (isTable) {
                // Insert the table exactly as written in the HTML
                clause.html = clauseElement.innerHTML;
                // Force the non-table branch in insertClauseIntoWord so it uses insertHtml
                clause.isTable = false;
            } else if (isMultiline || clauseElement.querySelector("ul, ol")) {
                // For multiline content (P tags, UL/OL lists) use innerHTML to preserve formatting.
                clause.html = clauseElement.innerHTML;
            } else {
                // For simple, single-line clauses inside a <p> tag, use textContent.
                clause.text = clauseElement.textContent.trim();
            }

            // Only insert if we have content
            if (clause.text || clause.html || clause.tableData) {
                insertClauseIntoWord(clause);
            } else {
                console.warn("Attempted to insert empty clause:", clauseElement);
            }
        });
    });
}

// --- END NEW FUNCTION ---

// --- UI AND INITIALIZATION ---

function wireToggles() {
    const toggles = document.querySelectorAll(".category-toggle, .subcategory-toggle, .subsubcategory-toggle");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            // 1. Toggle the 'expanded' class immediately (changes +/- icon)
            toggle.classList.toggle("expanded");
            
            const content = toggle.nextElementSibling;
            if (!content) return;

            // 2. Based on the new class state, set the display property
            // If the toggle now has the 'expanded' class, show the content.
            if (toggle.classList.contains("expanded")) {
                content.style.display = "block";
            } else {
                // If it no longer has the 'expanded' class, hide the content.
                content.style.display = "none";
            }
        });
    });
}

Office.onReady((info) => {
  if (info.host !== Office.HostType.Word) return;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
});

function start() {
  wireToggles();
  wireClauseButtons(); 
  setStatus("Ready.");
}
