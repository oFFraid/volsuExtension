const g = (selector) => {
    return document.querySelector(selector)
}

const printMessage = (div, mess) => {
    div.innerHTML = mess
    setTimeout(() => {
        div.innerHTML = ""
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {

    const errorDiv = g("#error")
    const successDiv = g("#success")
    const forumText = g("#forumText")
    const newTextForum = g("#newTextForum")

    chrome.storage.local.get('text', function (result) {
        const { text } = result
        if (forumText && text) {
            forumText.value = text
        }
    });

    newTextForum.addEventListener("submit", (ev) => {
        ev.preventDefault()

        if (forumText) {
            const text = forumText.value.trim()
            if (text !== "") {
                chrome.storage.local.set({ 'text': text }, function () {
                    forumText.value = text
                    printMessage(successDiv, "текст сохранен")
                });
            } else {
                printMessage(errorDiv, "поле не может быть пустым!")
            }
        }
    })
})


