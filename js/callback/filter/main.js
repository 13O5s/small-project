Array.prototype.filter2 = function(callback)
{
    var result = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if(callback(this[index], index, this))
                result.push(this[index]);
        }
        else break;
    }
    return result;
}




var a = [{name : 'a', value : 10}, {name : 'b', value :10}, {name: caches, value : 20}]
var b = a.filter2(function(item, index, array)
{
    return item.value == 10;
});
// console.log(b);
// var b = a.filter(function(item,index){
//     return item.value == 10;
// })
console.log(b);