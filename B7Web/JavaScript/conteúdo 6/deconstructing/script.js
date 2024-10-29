// Deconstructing Object

let pessoa = {
    nome: 'Ruan',
    sobrenome: 'Richard',
    idade: 90,
    social: {
        face: 'ruaan',
        insta: 'ruaanriichard'
    },

    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

let {nome:newNome, sobrenome, idade} = pessoa;
let {face, insta} = pessoa.social;
