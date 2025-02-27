// FETCH, ASYNC AND AWAIT

async function loadPosts() {
    document.getElementById("posts").innerHTML = "loading..."
    
    // method post
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Title test',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let json = await req.json();
    creatBlog(json);

    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(result) {
        return result.json();
    })
    .then(function(json){
        creatBlog(json);
    })

    .catch(function(error){
        console.log("Deu problema!");
    });
    */
}

function creatBlog(list) {
    let html = '';

    for(let i in list) {
        html += '<h3>'+list[i].title+'</h3>';
        html += list[i].body+'<br>';
        html += '<hr>';
    }

    document.getElementById("posts").innerHTML = html;
};