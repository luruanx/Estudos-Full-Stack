// Callback / Requisição JSON

// function clicou() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//         return response.json();
//     })
//     .then((json) => {
//         console.log(json);
//     })
// }

// document.querySelector('#botao').addEventListener('click', clicou());


// async/await

async function clicouu() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Title the fast post: ${json[0].title}`);
    alert("Clicou!")
}

async function inserir() {
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
    let json = await response.json();

    console.log(json);
}

document.querySelector('#botao1').addEventListener('click', clicouu);
document.querySelector('#inserir').addEventListener('click', inserir);