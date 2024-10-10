// Funcional: Factory

function createPerson(name, lastname, age) {
    return {
        name,
        lastname,
        age
    }
}

let person1 = createPerson('Ruan', 'Richard', 26);





// Funcional: Instância e This

function createPerson1(name, lastname, age) {
    return {
        name,
        lastname,
        age,
        getFullName() {
            return `${this.name} ${this.lastname}`;
        }
    }
}

console.log(person1.getFullName());




// Funcional: Herança

const defaultUser = {
    name: '',
    email: '',
    level: ''
}

let user1 = {
    ...defaultUser,
    name: 'Ruan',
    email: 'luruan@mail.com'
}
