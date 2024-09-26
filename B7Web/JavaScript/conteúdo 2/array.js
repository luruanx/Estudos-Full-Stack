// OPERAÇÕES BÁSICAS DE ARRAY

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

//adicionar item
ingredientes.push('açucar');

//remover o primeiro item
ingredientes.shift();

//remover o último item
ingredientes.pop();

//retorna uma string, junta e adiciona espaço
ingredientes.join('-');

//alterar item especifico
ingredientes[3] = 'sabor';
ingredientes[ingredientes.length - 1] = 'açucar';

console.log(`Total de ingredientes: ${ingredientes.length}`);



// ORDENAÇÃO DE ARRAY
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

//em ordem alfabética
fruits.sort();

//inverte a ordem
fruits.reverse();

//ordenando objetos
let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'Bmw', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort((a, b) => {
    return a.year - b.year;
});

console.log