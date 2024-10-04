// DOM

// --------------------------SELECIONANDO ELEMENTOS
document.getElementById("--")
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName

document.querySelector("--")  //return element
document.querySelectorAll     //return array



// --------------------------------EVENTOS DE CLIQUE
//com o onclick
function clicou() {
    console.log("Clicou no botão");
}

//direto no JS
let botao = document.querySelector('.saiba');
botao.addEventListener("click", () => {
    clicou();
});


// -----------------------------MANIPULAÇAO ELEMENTOS
// alterando element
// append e prepend
function clickMani() {
    const teste = document.querySelector('#teste');
    const element = teste.querySelector('ul');

    element.innerHTML += "<li>Item adicionado</li>"

    /* let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

    element.appendChild(newLi);
    */
}

// after e before 
function clickMani2() {
    const teste = document.querySelector('#teste');
    const element = teste.querySelector('ul');

    let newUl = document.createElement('ul');
    
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " + (i);
        newUl.append(newLi);
    }

    element.after(newUl);
}

// -----------------------------MANIPULAÇAO ATRIBUTOS
// getAttribute = pega
// hasAttribute = busca
// setAttribute = seta
function clickManiAtri() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerHTML = "Mostrar senha"
    } else {
        input.setAttribute('type', 'text');
        botao.innerHTML = "Ocultar senha";
    }
}