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
 * Inserts plain text and explicitly updates the cursor position for sequential clicks.
 * @param {string} text The clause text to insert.
 */
function insertTextIntoDocument(text) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. Insert the text content and two paragraph breaks (\n\n) at the end of the current selection.
        selection.insertText(text + "\n\n", Word.InsertLocation.end);

        // 2. CRITICAL STEP: Insert an empty string AFTER the selection. This returns a new Range object.
        let newRange = selection.insertText("", Word.InsertLocation.after);

        // 3. Set the active document selection to this new range. This explicitly moves the cursor.
        newRange.select();

        return context.sync(); 
    }).catch(function (error) {
        console.error("Error inserting text:", error);
    });
}

/**
 * Inserts HTML content and explicitly updates the cursor position for sequential clicks.
 * @param {string} html The clause HTML to insert.
 */
function insertHtmlIntoDocument(html) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. Insert the HTML content (including a trailing <p></p> for a new paragraph)
        selection.insertHtml(html + "<p></p>", Word.InsertLocation.end);

        // 2. CRITICAL STEP: Insert an empty string AFTER the selection. This returns a new Range object.
        let newRange = selection.insertText("", Word.InsertLocation.after);

        // 3. Set the active document selection to this new range. This explicitly moves the cursor.
        newRange.select();

        return context.sync();
    }).catch(function (error) {
        console.error("Error inserting HTML:", error);
    });
}
