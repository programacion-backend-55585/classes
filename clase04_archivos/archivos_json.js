const fs = require('fs')

const filename = './myDB.json'

if( fs.existsSync(filename) ) {

    fs.promises.readFile(filename, 'utf-8')
        .then(contenido => {
            const db = JSON.parse(contenido)
            console.log('DB is: ', db)
        })
        .catch(e => console.log('ERROR', e))

} else {
    const arrayProductos = []

    arrayProductos.push({name: 'Wines', price: 100})
    arrayProductos.push({name: 'Beers', price: 140})

    fs.promises.writeFile(filename, JSON.stringify(arrayProductos))
        .then(() => console.log('DB created!'))
        .catch(e => console.log('ERROR', e))
}
