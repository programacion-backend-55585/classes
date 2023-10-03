const fs = require('fs')

const filename = './archivoAsync.txt'
fs.writeFile(filename, 'asdasdasd', (error) => { // Escribir el archivo
    if(error) return console.log(error)
    
    console.log('Se termino de escribir el archivo')

    fs.unlink(filename, (error) => { // Borra el archivo
        if(error) return console.log(error)
        console.log('Se borro el archivo')
    })
})

const filename2 = './otroArchivoAsync.txt'
fs.writeFile(filename2, 'asdasdasdasdasdasdasda asdasdasd', () => {
    console.log('Se termino de escribir el ultimo !!! archivo')

    fs.readFile(filename2, 'utf-8', (error, contenido) => {
        if(error) return console.log('No se pudo leer el archivo')
        console.log({contenido})

        fs.appendFile(filename2, 'Add more content!!', (error) =>   {
            if(error) return console.log('No se pudo agregar mas cotenido')

            fs.readFile(filename2, 'utf-8', (error, contenido) => {
                if(error) return console.log('No se pudo agregar mas cotenido')

                console.log('COntenido despues de append: ', contenido)
            })

        })
    })

})

setTimeout(() => { console.log('DIN DON')}, 3000)

console.log('Se termino el script')

/**
 * VENTAJAS
 * No son bloqueantes
 * 
 * DESVENTAJAS
 * Tiene Callback Hell
 * Siempre son asyncronicas
 * 
 */
