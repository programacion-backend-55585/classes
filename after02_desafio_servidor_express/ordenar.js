/**
 * Ordar los elementos de un array
 */

const array = [9, 3, 1, 2, 1, 4] // [1, 3, 9, 2, 1, 4]
// [1, 1, 2, 3, 4, 9]

function ordernar(array) {
    
    // Buscar el numero menor en todo el array
    let numeroMenor = array[0]
    let posicionNumeroMenor = 0

    for(let i = 1; i < array.length; i++) {
        
        const numeroAComparar = array[i]
        
        if( numeroAComparar < numeroMenor) {
            numeroMenor = numeroAComparar
            posicionNumeroMenor = i
        }
    }

    // Intercambiar dos numeros de position
    const numeroAnterior = array[0]
    array[0] = numeroMenor
    array[posicionNumeroMenor] = numeroAnterior

    return array
}

console.log( ordernar(array) )

