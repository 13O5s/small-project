document.getElementById('getText').addEventListener('click',function(e) {
    fetch('sample.txt')
    .then(function(data) {return data.text()})
    .then(function(data)
    {
        document.getElementById('output').innerHTML = data
    })
    .catch(err => console.error(err));
})
document.getElementById('getJson').addEventListener('click',function(e) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(data) {return data.json()})
    .then(function(data)
    {
        let output = '<h2>POST</h2>';
        data.forEach(function(item)
        {
            output += `
            <div>
                <strong>${item.title}</strong>
                <emphasis>${item.body}</emphasis>
            </div>

            `
        })
        document.getElementById('output').innerHTML = output
        
    })
    .catch(err => console.error(err));
})

document.getElementById('submit').addEventListener('click', (e) =>{
   e.preventDefault()
    var title = document.getElementById('title').value;
    var body = document.getElementById('content').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .them((res) => res.json())
    .then(data => console.log(data));
})
;
