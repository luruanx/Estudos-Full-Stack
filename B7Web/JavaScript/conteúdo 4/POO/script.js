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
