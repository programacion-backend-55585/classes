const fs = require('fs')

// Escribir en un archivo
fs.writeFileSync('./ejemplo.txt', 'Hola comosion !! Slaludos para el tutor Daniel Perco ➕')
fs.writeFileSync('./data.txt', 'Esto es otra cosa 😇')
fs.writeFileSync('./data.txt', 'Esto es otra cosa 👰')

fs.writeFileSync('./data22.txt', 'Init The File')


if( fs.existsSync('./data22.txt') ) { // Pregunta si el archivo existe

    // Lee un archivo
    const contenido = fs.readFileSync('./data22.txt', 'utf-8')
    console.log(contenido)
    console.log('--------------------------------------')

    // Agrega al final del archivo
    fs.appendFileSync('./data22.txt', '\nMas contenido para Alan ⛺')

    const contenido2 = fs.readFileSync('./data22.txt', 'utf-8')
    console.log(contenido2)

    // Borra un archivo
    fs.unlinkSync('./data22.txt')
}

/**
 * VENTAJAS
 * Mejor code, mejor lectura
 * Mejor orden de las cosas
 * 
 * DESVENTAJAS
 * Todos los procesos son bloqueantes 
 * 
 */
