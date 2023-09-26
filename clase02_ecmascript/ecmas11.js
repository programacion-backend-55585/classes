
const varTest = false

// let varAssignable = varTest
// if( varTest === 0 ) varAssignable = 'Sin Valor'
const varAssignable = varTest || "Sion Valor"
console.log(varAssignable)


// let varAssignable = varTest
// if( varTest === undefined ) varAssignable = 'Sin Valor'
const varAssignable2 = varTest ?? "Sin Valor"
console.log(varAssignable2);

// Atribuos privados en una clase

class Persona {
    #age
    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.#age = age
    }

    // Setter and Getter
    getAge = () => { return this.#age }
    setAge = age => { this.#age = age }
}

const edoardo = new Persona("Edoardo", "Maciel", 25)
console.log(edoardo)