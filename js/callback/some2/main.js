Array.prototype.some2 = function(cb)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if(cb(this[index], index, this)) return true;
        }
    }
    return false;
}

var a = [{name : 'a', value : 10}, {name : 'b', value :10}, {name: caches, value : 20}]
var b = a.some2(a=>a.value == 30);
// var b = a.some(function(item)
// {
//     return item.value == 20;
// })
console.log(b);