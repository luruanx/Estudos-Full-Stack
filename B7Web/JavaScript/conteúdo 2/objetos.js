let nome = 'Luruan'; //string
let nomes = ['Ruan', 'Richard']; //array
//objeto
let personagem = {
    nome: 'Ruan',
    idade: 26,
    pais: 'Brasil',
    //objeto dentro objeto
    skills: {
        forca: 87,
        magia: 15,
        stamina: 23
    },
    //array dentro do objeto
    olhos: ['preto', 'azul'];
}

console.log(`${personagem.nome} tem ${personagem.idade} e mora no ${personagem.pais}`)
console.log(personagem.skills.magia);
console.log(personagem.olhos[1]);

// ALTERANDO OBJETOS
personagem.nome = 'Pedro';
personagem.skills.forca += 5;

// ALTERANDO ARRAY DENTRO DO OBJETO
personagem.olhos.push('verde');

// OBJETO -> DENTRO UM ARRAY -> DENTRO UM OBJETO
let person = {
    nome: 'Ruan',
    idade: 26,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'Vermelho'}
    ]
}

person.carros[0].cor
console.log(personagem.carros[1].modelo);