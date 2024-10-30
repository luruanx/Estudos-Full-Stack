// OPERADOR SPREAD

// with array
let numeros = [1, 2, 3, 4]
let outros = [...numeros, 5, 6, 7, 8]

// with objects
let info = {
    nome: 'Ruan',
    sobrenome: 'Richard',
    idade: 26
};
let novaInfo = {
    ...info,
    cidade: 'Campina Grande',
    estado: 'Paraíba'
};

// in function

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 'ativo',
        idade: 26,
        cidade: 'CG'
    }

    return novasInfo;
};

console.log(adicionarInfo({nome: 'Ruan', sobrenome: 'Richard'}));




// OPERADOR REST

function adicionar(...numeros) {
    console.log(numeros);
}

adicionar(1, 2, 3, 4, 5);

