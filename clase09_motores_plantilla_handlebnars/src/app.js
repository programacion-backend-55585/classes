import express from 'express'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
import __dirname from './utils.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Inicializamos o definimos el motor de plantillas dentro de express
app.engine('handlebars', handlebars.engine())
// Incicamos donde estan las vistas
app.set('views', __dirname + '/views')
// Indicamos que motor de plantilas usar
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))


app.use('/', viewsRouter)
app.use('/api/user', usersRouter)

app.listen(8080)