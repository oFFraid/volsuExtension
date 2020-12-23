
let yourCourses = {
    "34209": "БД",
    "34201": "Дискретка",
    "34193": "Английский",
    "34189": "Матмод",
    "34205": "ООП",
    "34219": "Физика",
    "34242": "ЦТ",
    "34238": "Физра ОФП"
}

let allCourses = document.querySelectorAll("#inst265303 > div.content > table > tbody > tr > td.cell.c0:nth-child(1) > a")

if (allCourses.length) {
    allCourses.forEach(element => {
        const url = new URL(element.href)
        let courseId = url.searchParams.get('id')
        let nameCourse = yourCourses[courseId]
        if (!nameCourse) {
            let parent = element.closest("tr");
            parent.remove()
        }
    });

} else {
    console.log('allCourses not found');
}
