// MANIPULAÇÃO DE ARRAYS

let lista = ['ovo', 'farinha', 'corante', 'massa'];
let lista2 = ['panela', 'prato', 'batedeira']

// string e separa = .join('-');
// posição item = .indexOf('massa');
// adiciona = .push();
// remove primeiro = .shift();
// remove ultimo = .pop();
// altera = lista[0] = '...';
// remove = .splice(1, ?)
// concatenar = .concat(lista2);
// ordenar = .sort(); ou .reverse();

let res = lista.toString();
console.log(res);




// ------------ MANIPULAÇÃO DE ARRAYS 2

let list = [40, 4, 7, 35];
let list2 = [];
let list3 = []

// MAP RODA A FUNÇÃO NOS ITENS
list2 = list.map(function(item) {
    return item * 2;
})

console.log(resp);

// FILTER = FILTRA OS ITENS
// EVERY = VERIFICA SE TODOS SÃO
// SOME = VERIFICA SE ALGUNS
// FIND = RETORNA O ITEM EXATO
// FINDINDEX = RETORNA A POSIÇÃO DO ITEM

list3 = list.filter(function(item) {

//  return (item > 20) ? true : false;
    if(item > 20) {
        return true;
    } else {
        return false;
    }
})

console.log(list3);


