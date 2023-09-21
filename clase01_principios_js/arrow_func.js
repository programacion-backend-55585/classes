
const myFunction = (nombre) => {
    let age = 20
    return nombre + " " + age
}

const resultado = myFunction('Tutor Ruben')
console.log( myFunction('Tutor Jhon') )
console.log( myFunction('ANdrea') )


console.log(resultado)

// Arrow funcions escrito mas ligero
// Un argumento, podemos omitir los parentesis
const myFunction2 = nombre => nombre + " " + 20

// Si es mas de un argumento, deberiamos usar parentesis
const myFunction3 = (nombre, apellido) => nombre + " " + 20

// Si no usamos argumentos, deberiamos usar parentesis
const myFunction4 = () => " " + 20


console.log( myFunction2('Tutor Ruben'))
console.log( myFunction2('Tutor Jhon') )
console.log( myFunction2('ANdrea') )