Array.propotype.array2 = function(callback)
{
    var arrayLength = this.length;
    var result = [];
    for(var i = 0; i < arrayLength; i++)
    {
        result.push(callback(this[i]));
    }
    return result;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];


courses.map2(function(courses)
{
    return `<h2>${courses}</h2>`
});