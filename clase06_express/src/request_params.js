import express from 'express'
import ProductManager from './ProductManager.js'

const app = express()

app.get('/saludo/:name', (req, res) => {
    const productManager = new ProductManager()
    
    console.log( req.params )
    const { name } = req.params

    res.send(`Saludo para mi amigo ${name}`)
})


app.listen(8080)