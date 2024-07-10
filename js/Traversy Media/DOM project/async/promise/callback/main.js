var posts = [{  title: 'post 1', body :'this is a post 1'},{  title: 'post 2', body :'this is a post 2'}]

function getPosts()
{
    let i = 0;
    setTimeout(function() {
        let output = '';
        posts.forEach((post, index) => {
        console.log(++i);
        output += `<li>${post.title}</li>` 
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {))
}
getPosts();
createPost({ title: 'post 3', body: 'this is a post 3'});