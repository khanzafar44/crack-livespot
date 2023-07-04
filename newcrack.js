let EFV = '<div style="position:absolute;left:-99%;"><a href="https://lessonplan.in">Lesson plan</a></div>';
document.querySelector("header") ? document.querySelector("header").insertAdjacentHTML("beforeend", EFV) : document.body.insertAdjacentHTML("beforeend", EFV);
