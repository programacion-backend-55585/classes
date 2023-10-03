const fs = require('fs')

const filename = './archivoPromesa.txt'
const promesa = fs.promises.writeFile(filename, 'Contenido desde la promesa')

 // PROMESAS 
promesa
    .then( () => { console.log("Se ejecutro el WRITE") })
    .then( () => { 
        fs.promises.readFile(filename, 'utf-8')
            .then((contenido) => {console.log(contenido)})
            .catch( (error) => console.log("Hubo un error en el READ"))
     })
    .catch( (error) => { console.log("Hubo un error en el WRITE") })


    // AWAIT - ASYNC
const operacionAsync = async () => {

    await fs.promises.writeFile('./otroArchivoPorEscribir.txt', 'Mas content!!')

    console.log('Este log espero que termine de escribir')

}

operacionAsync()

console.log('END')

/**
 * VENTAJAS
 * Pueden ser bloqueantes o no bloqueantes
 * No tienen callback hell
 * Mejor orden de las cosas
 * Mejor manera de manejar los hilos
 * 
 * DESVENTAJAS
 * Cuesta aprenderlo al principio
 * 
 */