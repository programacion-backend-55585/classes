import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import pokeRouter from './routes/poke.router.js'

// Inicializamos las variables
const app = express()

// Configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Rutas
app.get('/', (req, res) => res.render('index', {}))
app.get('/health', (req, res) => res.send('OK'))
app.use('/pokemon', pokeRouter)

app.listen(8080, () => console.log(`Listening 🏃 ....`))