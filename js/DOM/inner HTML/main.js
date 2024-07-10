var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    // var ulElement = document.querySelector('ul');
    // for(var i in courses)
    // {
    //     ulElement.innerHTML += `<li>${courses[i]}</li>`
    // }
    courses = courses.map(function(course) {return '<li>' + course + '</li>'});
    console.log(courses);
    console.log(courses.join(""));
}
render(courses);

// render(courses)

