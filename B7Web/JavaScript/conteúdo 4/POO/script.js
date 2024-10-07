/*
- Programação Orientada a Objetos (POO - OOP)
- Programação Procedural
- Programação Funcional (PF - FP)

- CLASSES
- FUNÇÕES/OBJETOS
*/

class Person {

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    //action
    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge;
        } else {
            console.log('Apenas Números.')
        }
    }
}

// CLASSES: INSTÂNCIA
let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.setAge(20);
