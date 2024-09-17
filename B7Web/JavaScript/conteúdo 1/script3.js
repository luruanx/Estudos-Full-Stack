// CONDICIONAL - IF / ELSE

let idade = 14;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
// < maior
// > menor
// == igual
// <= maior ou igual
// >= menor ou igual
// != indiferente
// === rigoroso


 
// MULTI-CONDICIONAIS - && / ||

let idade = 90

/*
if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto");
    }
}
*/

if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
}
// && adição and
// || opção or



// CONDICIONAL DEPENDENTE - IF ELSE

let idade = 90

if ( idade < 18) {
    console.log("Você é um criança.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.");
}




// CONDICIONAL TERNÁRIO - ? / :

let isMember = false;
let shipping = (isMember ? 2 : 10);

console.log(isMember ? "Você é membro" : "Você não é membro");
console.log("Frete: " + shipping);



// SWITCH

let profession = "fiscal";
console.log("Profissional: " + profession)

switch (profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua camisa será VERMELHA');
        break;
    case 'policial':
        console.log('Sua camisa será AZUL');
        break;
    default:
        console.log('Sua camisa será PRETA');
        break;
}