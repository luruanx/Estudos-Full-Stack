/*
- Programação Orientada a Objetos (POO - OOP)
- Programação Procedural
- Programação Funcional (PF - FP)

- CLASSES
- FUNÇÕES/OBJETOS
*/

class Person {

    _age = 0;
    steps = 0;

    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    //action
    takeAStep() {
        this.steps++;
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    get age() {
        return this._age;
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x;
        }
    }
}

// CLASSES: INSTÂNCIA
let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos.`)



// CLASSES: HERANÇA
class Person1 {

    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} Olá!`)
    }
}

class Student extends Person1 {

    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        super.sayHi();
    }
}

let p1 = new Student("Luruan", 26);
p1.age = 20;

p1.sayHello();



// Classes: Variável/Método estático
class Person2 {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name; 
    }

    sayHi() {
        console.log('Oi!')
    }
}

let p1 = new Person("Bonieky");



// Classes: Factory
class Person3 {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name; 
    }

}

function createPerson(name, age) {
    let p = new Person3(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Ruan', 90);
console.log(`${p1.name} tem ${p1.age} anos.`);