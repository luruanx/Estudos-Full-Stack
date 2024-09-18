function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
// Usar quantas vezes quiser a função
nomeCompleto("Ruan", "Richard");
nomeCompleto("João", "Silva");


// ENTRADA -> PROCESSAMENTO -> SAÍDA

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Ruan", "Richard");
console.log('Completo: ' + completo);


// FUNÇÃO COM RETORNO CONDICIONAL

function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 10;
let vericacao = maiorDeIdade(idade);

if (vericacao) {
    console.log('É maior de idade.');
} else {
    console.log('É menor de idade.');
}