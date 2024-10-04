// MANIPULANDO CSS e CLASS

function clicou() {
    const li = document.querySelector('li');
    const button = document.querySelector('button');

    li.style.backgroundColor = "red";
    li.style.color = 'white'

    button.classList.toggle('botãoone');
}



// EVENTOS DE TECLADO

function apertou() {
    console.log('apertou!')
}

function segurou() {

}

function soltou(e) {
    console.log(e.code);
    console.log('Shift? ' + e.shiftKey);
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
