// SPREAD
const persona1 = {
    name: 'Brayan Diaz',
    age: 15,
    married: true
}

const propiedades = {
    nombre: 'Casas',
    values: [2, 3, 4, 5, 6, 7, 12],
    age: 30
}
//const name = persona1.name
const { name, age } = persona1
console.log(name, age)

const newObject = { ...persona1, ...propiedades}
console.log(newObject);

const { married, ...rest } = persona1
console.log(married, rest)

////////////////////
const { name: nameV2 } = { ...persona1, ...propiedades}
const { nombre } = propiedades

const resultadoMaximo = { 
    name: persona1.name, 
    nombre: propiedades.nombre
}
console.log(resultadoMaximo)

// Para array
const array = ['asd', 'qwe', 'zxc']
const [elem1, elem2] = array
console.log(elem1, elem2)