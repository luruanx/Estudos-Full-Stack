// LOOP
for (let n = 0; n < 10; n++) {
    console.log('Frase Qualquer ' + n);
}

// LOOP EM ARRAY
let cores = ['preto', 'branco', 'verde', 'azul'];
cores.push('rosa');

// opção 1
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

// opção 2
for (let i in cores) {
    console.log(cores[i]);
}

// opção 3
for (let cor of cores) {
    console.log(cor);
}



// LOOP WHILE
let numero = 0;

while (numero < 10) {
    console.log(`O numero da vez é ${numero}`);
    numero++;
}

