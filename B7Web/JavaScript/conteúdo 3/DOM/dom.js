// DOM

// SELECIONANDO ELEMENTOS
document.getElementById("--")
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName

document.querySelector("--")  //return element
document.querySelectorAll     //return array



// EVENTOS DE CLIQUE
//com o onclick
function cliclou() {
    console.log("Clicou no botão");
}

//direto no JS
let botao = document.querySelector('.saiba');
botao.addEventListener("click", () => {
    cliclou();
});

