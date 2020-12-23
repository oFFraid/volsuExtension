let forumMessage = document.querySelector("#id_message")

chrome.storage.local.get('text', function (result) {
    if (forumMessage) {
        if (result) {
            forumMessage.value = result.text
        }
    } else {
        console.log("error elem not found");
    }
});

