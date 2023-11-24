import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import productModel from './models/products.model.js'
import __dirname from './utils.js'

const app = express()

// Handelbars
app.engine('hbs', handlebars.engine({extname: 'hbs'}))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.get('/',  async (req, res) => {
    const limit = parseInt(req.query?.limit ?? 4)
    const page = parseInt(req.query?.page ?? 1)
    const query = req.query?.query ?? ''

    const search = {}
    if(query) search.name = { "$regex": query, "$options": "i" }

    const result = await productModel.paginate(search, {
        page,
        limit,
        lean: true
    })

    result.payload = result.docs
    result.query = query
    result.status = 'success'
    
    delete result.docs

    res.render('index', result)
})

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', {dbName: 'after03_55'})
    .then(() => app.listen(8080))
    .catch(e => console.error(e))
