// JSON.PARSE - STRING -> JSON
let pessoa = '{"nome": "Ruan", "idade": "26"}';
pessoa = JSON.parse(pessoa);

// JSON.STRINGFY - JSON -> STRING
let pessoaString = JSON.stringify(pessoa);


// CÓDIGO SÍNCRONO E ASSÍNCRONO --------------

// síncrono - aguarda conclusão
let nome = 'Ruan';
let sobrenome = 'Richard';
let completo = nome+ ' ' +sobrenome;

// assíncrono - não aguarda conclusão
let nomeA = 'Ruan';
let sobrenomeA = 'Richard';
let temperatura = maquininha.pegarTemp();
let completoA = nome+ ' ' +sobrenome;


// CALLBACKS - QUANDO TIVER RESULTADO, EXECUTE
// assíncrono
function alertar() {
    alert("opa, deu certo!");
}

setTimeout(alertar, 2000);