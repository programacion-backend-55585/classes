import express from 'express'

// NO OLVIDEN EL .js AL FINAL DE IMPORTAR
import ProductManager from './ProductManager.js'

const app = express()

app.get('/', (req, res) => res.json('ok'))
app.get('/api/products', async (req, res) => {

    const productManager = new ProductManager()

    const data = await productManager.getProducts()

    res.json( { data })

})

app.listen(8080)