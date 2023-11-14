import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import pokeRouter from './routes/poke.router.js'
import __dirname from './utils.js'

// Inicializamos las variables
const app = express()
const mongoURL = 'mongodb://admin:admin@127.0.0.1:27017'
const mongoDBName = 'clase15_55585'

// Para traer info de POST como JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Carpeta publica
app.use(express.static(__dirname + '/public'))

// Rutas
app.get('/', (req, res) => res.render('index', {}))
app.get('/health', (req, res) => res.send('OK'))
app.use('/pokemon', pokeRouter)


// Conectamos a DB y corremos el Server
mongoose.connect(mongoURL, { dbName: mongoDBName })
    .then(() => {
        console.log('DB connected 😎')
        app.listen(8080, () => console.log(`Listening 🏃 ....`))
    })
    .catch(e => console.error('Error to connect 🚨🚨'))
