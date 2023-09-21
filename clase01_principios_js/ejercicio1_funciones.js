
const mostrarLista = (array) => {
    console.log('---------------------------')
    if(array.length === 0) return 'Lista vacia'

    for(let i = 0; i < array.length; i++) {
        console.log( array[i] )
    }

    return `La longitud del array es ${array.length}`
}

console.log( mostrarLista( [1, 2, 3] ) )
console.log( mostrarLista([]))
console.log( mostrarLista(['R2', '🎴', 22]))