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

console.log(`Total de ingredientes: ${ingredientes.length}`);