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

function insertTextIntoDocument(n) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. INSERT: Inserts the content at the cursor's current position (Word.InsertLocation.end).
        selection.insertText(n + "\n\n", Word.InsertLocation.end);

        // 2. LOAD: Tells the API to fetch the boundary points of the selection after insertion.
        selection.load("start, end");
        
        return context.sync().then(function() {
            // 3. MOVE: This fires after the first sync. It collapses the selection 
            //    to a cursor (0 units) at the new 'end' of the inserted range. 
            //    This is the critical step to set the new, updated insertion point.
            selection.move(Word.MovementType.wdCharacter, 0, Word.MovementType.end);
            return context.sync(); // 4. SYNC: Ensures the cursor movement is fully committed.
        });
    });
}
function insertHtmlIntoDocument(n) {
    return Word.run(function (context) {
        let selection = context.document.getSelection();

        // 1. INSERT: Inserts the HTML content at the cursor's current position.
        selection.insertHtml(n + "<p></p>", Word.InsertLocation.end);

        // 2. LOAD: Tells the API to fetch the boundary points of the selection after insertion.
        selection.load("start, end");
        
        return context.sync().then(function() {
            // 3. MOVE: Collapses the selection to the new 'end' of the inserted range (after the <p></p>).
            selection.move(Word.MovementType.wdCharacter, 0, Word.MovementType.end);
            return context.sync(); // 4. SYNC: Commits the final cursor position update.
        });
    });
}
