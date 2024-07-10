Array.prototype.forEach2= function(callback)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
            callback(this[index],index,this);
        else break;
    }
};
var a = [1,2,3,4,5];
a.forEach2(function(value, index,array)
{
    console.log(value, index, array);
})