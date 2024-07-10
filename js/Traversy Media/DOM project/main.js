var form = document.getElementById('addForm');
var item = document.getElementById('items');

// add items
form.addEventListener('submit', function(e){
    e.preventDefault();
    var content = document.getElementById('item').value;
    item.innerHTML += `<li class="list-group-item"> ${content} <button class="btn btn-danger btn-sm float-right delete">X</button></li>`;
})

item.addEventListener('click', function(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure you want to delete'))
        {
            var li = e.target.parentElement;
            item.removeChild(li);
        }
    }
})

var filter = document.getElementById('filter');
filter.addEventListener('keyup', function(e) {
    var content = e.target.value.toLowerCase();
    var i = 0 ;
    Array.from(item.children).forEach(function(child){
        if(child.textContent.toLowerCase().includes(content)){
            child.style.display = 'block';
        }
        else
            child.style.display = 'none';
    })

})