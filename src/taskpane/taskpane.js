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
    Word.run(function (context) {
        const selection = context.document.getSelection();
        selection.insertText(n + "\n\n", Word.InsertLocation.replace);
        return context.sync();
    });
}

function insertHtmlIntoDocument(n) {
    Word.run(function (context) {
        const selection = context.document.getSelection();
        selection.insertHtml(n + "<p></p>", Word.InsertLocation.replace);
        return context.sync();
    });
}
