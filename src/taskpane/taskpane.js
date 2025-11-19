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
        const selection = context.document.getSelection();
        
        // 1. Insert the text
        selection.insertText(n + "\n\n", Word.InsertLocation.end); 
        
        // 2. Insert a new selection/cursor point (empty range) at the end 
        //    of the content we just inserted.
        const newSelection = selection.insertContentControl();
        newSelection.delete(); // Immediately delete the content control to leave a cursor
        
        return context.sync();
    });
}

function insertHtmlIntoDocument(n) {
    return Word.run(function (context) {
        const selection = context.document.getSelection();

        // 1. Insert the HTML
        selection.insertHtml(n + "<p></p>", Word.InsertLocation.end);

        // 2. Insert a new selection/cursor point (empty range) at the end
        //    of the content we just inserted.
        const newSelection = selection.insertContentControl();
        newSelection.delete(); // Immediately delete the content control to leave a cursor

        return context.sync();
    });
}
