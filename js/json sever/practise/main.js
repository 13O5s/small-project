// function cancleDf()
// {
//     var btn = document.querySelectorAll('button');
//     btn.forEach(e=>
//         {
//             e.preventDefault();
//         })
// }
var postAPI = 'http://localhost:3000/posts';

function start(){
    getPost();
    handleCreateForm();
}

start();

// function in work
function getPost(){
    fetch(postAPI)
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            return renderCourse(data);
        })
        .then(function(data){
            var postListBlock = document.querySelector('#list-course'); 
            postListBlock.innerHTML = data.join('');
        })
}

function renderCourse(course)
{
    var htmls = course.map(function(data){
        // console.log(data);
        return `
        <li class="course-item-${data.id}">
            <h4>${data.title}</h4>
            <p>${data.content}</p>
            <button onclick="deleteCourse(${data.id})">&times;</button>
            <button onclick="updateCourse(${data.id})">update</button>
        </li>`
    });
    return htmls;
}

function handleCreateForm(e)
{
    var btn = document.getElementById('create');
    btn.onclick = function(e)
    {
        let title = document.querySelector('input[name="title"]').value;
        let content = document.querySelector('input[name="content"]').value;
        let FormData = {
            title: title,
            content: content
        }
        createCourse(FormData);
    }
}
function createCourse(data)
{
    let option = {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(data), 
    }
    fetch(postAPI,option)
    .then(function(data)
    {
       return data.json();
    })
    .then(function(data){
        getPost()
    })
}
function deleteCourse(id)
{
    
    let option = {
        method: 'DELETE',
        headers:{
            "content-type": "application/json"
        },
    }
    fetch(postAPI + '/' + id,option)
    .then(function(data) {
        return data.json();
    })
    .then(() =>{
        // getPost();
        var item = document.querySelector('.course-item-' + id);
        if(item)
        {
            item.remove();
        }
    })
}
function updateCourse(id)
{
    let title = document.querySelector('input[name="title"]');
    let content = document.querySelector('input[name="content"]');
    let btn = document.getElementById('create');
    btn.innerHTML = 'save';
    fetch(postAPI)
        .then(function(data)
        {
            return data.json();
        })
        .then(function(data){
            return data.find(function(post)
            {
                 return post.id == id;
            })
            
        })
        .then(function(data)
        {
            title.value = data.title;
            content.value = data.content;
        })

    btn.onclick = function()
    {
        let option = {
            method: 'PATCH',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: title.value,
                content: content.value
            })
        }
        fetch(postAPI + '/' + id,option)
        .then(function(response) {return response.json()})
        .then(()=> getPost(postAPI));
    }
        
    // title = data.title;
    // console.log(data.title);
    // content = data.content;
}
