/* Condição Alinhada

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
     console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
} */

// Condição Múltipla

var agora = new Date()
var diaSem = agora.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta...
*/

// console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}