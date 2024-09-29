// DOM

// ---------SELECIONANDO ELEMENTOS
document.getElementById("--")
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName

document.querySelector("--")  //return element
document.querySelectorAll     //return array



// ----------EVENTOS DE CLIQUE
//com o onclick
function clicou() {
    console.log("Clicou no botão");
}

//direto no JS
let botao = document.querySelector('.saiba');
botao.addEventListener("click", () => {
    clicou();
});


// -----------MANIPULAÇAO ELEMENTOS
// alterando element
function clickMani() {
    const teste = document.querySelector('#teste');
    const element = teste.querySelector('ul');

    element.innerHTML += "<li>Item adicionado</li>"
}

