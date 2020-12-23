
let recordBooks = {
    "221873": "Женя",
    "564499": "Я",
    "761841": "Дарьяна",
    "139296": "Макс"
}
let allPeople = document.querySelectorAll("div.content > ul > table > tbody > tr > td:nth-child(1)")
if (allPeople.length) {
    allPeople.forEach(element => {
        let number = element.innerHTML
        let name = recordBooks[number]
        if (name) {
            element.innerHTML = name
            if (name === "Я") {
                element.closest('tr').style.backgroundColor = "rgb(213, 251, 107)"
            }
        }
    });
} else (
    console.log('allPeople empty or not found')
)