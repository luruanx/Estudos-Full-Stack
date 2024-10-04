// ELEMENTOS
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// FUNÇÕES
function handleKeyUp(e) {
    if (e.key === 'Enter') {
        // Adicionar elemento Li na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        ul.appendChild(newLi);

        // Limpar o campo de texto
        input.value = '';
    }
}

// EVENTOS
input.addEventListener('keyup', handleKeyUp);

