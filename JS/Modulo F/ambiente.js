let num = [5, 8, 2, 9, 3]
num.push(0, 1, 4, 6, 7)
num.sort()

console.log()
console.log(`Nosso Vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor procurado está na posição ${pos}`)
}