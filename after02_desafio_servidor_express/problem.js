/**
 * Buscar en un array si existen por lo menos dos elementos iguales
 */


const array1 = [9, 3, 1, 2, 1, 4]
const array2 = [10, 33, 25, 2, 1, 101]

function hasTwoEquals(array) {

    for(let i = 0; i < array.length; i++) {
        
        const numeroABuscar = array[i]
        
        for(let j = i+1; j < array.length; j++) {
            
            //if(i === j) continue

            console.log("COMPARAR", i, j)
            if( numeroABuscar === array[j] ) return [{i}, {j}]

        }

    }

    return false
}

console.log(hasTwoEquals(array1))
//console.log(hasTwoEquals(array2))