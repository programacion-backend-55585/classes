
// Creamos una clase
class Persona {
    name = 'NN'

    // Funcion que se ejecuta cuando creamos una instancia de la clase
    constructor(name) {
        this.name = name
        this.age = 30
        console.log('Se creó una instancia de Persona')
    }

    // Un atriburo propia de la clase Persona y no de las instancias
    static specie = 'humano'

    // Esto es un metodo
    speak() {
        console.log(`My name is ${this.name}, soy un ${Persona.specie}`)
    }

    walk = () => {
        console.log('Like moon walk 🚶🚶🙇 ...')
    }

}

const person1 = new Persona('Jorge') // Creando una instancia de Persona
const person2 = new Persona('Jonatan')

console.log(person1)
console.log(person2)

person1.age++

Persona.specie = 'Homo Sapies'

person1.speak()
person2.speak()

person1.walk()
