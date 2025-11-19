/* eslint-disable no-undef */

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
}

function wireToggles() {
    const toggles = document.querySelectorAll(
        ".category-toggle, .subcategory-toggle, .subsubcategory-toggle"
    );

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("expanded");

            const content = toggle.nextElementSibling;
            if (content) {
                content.style.display = toggle.classList.contains("expanded")
                    ? "block"
                    : "none";
            }
        });
    });
}

function wireClauseButtons() {
    document.querySelectorAll(".clause-item").forEach((el) => {
        el.addEventListener("click", () => {
            const text = el.textContent.trim();
            const html = el.innerHTML;

            if (el.classList.contains("clause-multiline") || el.querySelector("ul, ol")) {
                insertHtmlIntoDocument(html);
            } else {
                insertTextIntoDocument(text);
            }
        });
    });
}

/**
 * Inserts plain text and positions the cursor without extra blank lines.
 * @param {string} text The clause text to insert.
 */
function insertTextIntoDocument(text) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. Insert the clause text. Use Word.InsertLocation.end.
        selection.insertText(text, Word.InsertLocation.end);

        // 2. Insert one empty paragraph directly AFTER the inserted text.
        //    This separates the current clause from the next.
        let newParagraph = selection.insertParagraph("", Word.InsertLocation.after);
        
        // 3. Set the active document selection to the END of the new paragraph. 
        //    This explicitly moves the cursor to the correct spot for the next click.
        newParagraph.select("End");

        return context.sync(); 
    }).catch(function (error) {
        console.error("Error inserting text:", error);
    });
}

/**
 * Inserts HTML content and positions the cursor without extra blank lines.
 * @param {string} html The clause HTML to insert.
 */
function insertHtmlIntoDocument(html) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. Insert the HTML content (which should contain its own paragraph tags).
        selection.insertHtml(html, Word.InsertLocation.end);

        // 2. Insert one empty paragraph directly AFTER the inserted HTML.
        //    This guarantees separation between clauses.
        let newParagraph = selection.insertParagraph("", Word.InsertLocation.after);
        
        // 3. Set the active document selection to the END of the new paragraph. 
        //    This explicitly moves the cursor to the correct spot for the next click.
        newParagraph.select("End");

        return context.sync();
    }).catch(function (error) {
        console.error("Error inserting HTML:", error);
    });
}
