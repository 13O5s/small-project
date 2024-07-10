var course = [
    {
        id: 1,
        name: 'JS',
        coin: 10
    },
    {
        id: 2,
        name: 'HTML',
        coin: 5
    },
    {
        id: 3,
        name: 'CSS',
        coin: 5
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 10
    }

];

function courseHandler(course, index, )
{
    return {
        id: course.id,
        name: 'Khoa hoc' + course.name,
        coin : course.coin,
        coinText: 'Gia ' + course.coin
    }
}

var newCourses = course.map(courseHandler);
console.log(newCourses);
