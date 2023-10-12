import express from 'express'

const app = express()

// Estas lineas nos permiten recibir la informacion en formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let products = [
    { id: 1, name: 'Beers', price: 100, stock: 29 },
    { id: 2, name: 'Wines', price: 150, stock: 13 }
]

app.get('/', (req, res) => res.send('OK'))

app.get('/api/products', (req, res) => res.json(products))
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const product = products.find(p => p.id === id)

    if(!product) {
        return res.status(404).json({error: 'Product Not Found'})
    }
    res.json(product)
})
app.post('/api/products', (req, res) => {
    const product = req.body

    if(!product.name || !product.price || !product.stock) {
        return res.status(400).json({error: 'Faltan datos para el producto'})
    }

    product.id = products.length + 1

    products.push(product)
    res.status(201).send({status: 'success', message: 'Product Created'})
})
app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = req.body

    if(!product.name || !product.price || !product.stock) {
        return res.status(400).json({error: 'Faltan datos para el producto'})
    }

    const idxProduct = products.findIndex(p => p.id === id)
    if(idxProduct < 0) {
        return res.status(404).json({error: 'Product not found'})
    }

    products[idxProduct] = product
    res.json({status: 'success', message: 'Product updated!'})
})

app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if( !products.some(p => p.id == id) ) {
        return res.status(404).json({error: 'Product not found'})
    }
    products = products.filter(p => p.id !== id)


    res.send({status: 'success', message: 'Prodcut deleted!'})
})



app.listen(8080, () => { console.log(`Running 🏃 ...`) })