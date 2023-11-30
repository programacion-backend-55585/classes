import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import sessionRouter from './routes/session.router.js'

import __dirname from './utils.js'

// Definicion de variables
const app = express()
const mongoURL = 'mongodb://admin:admin@127.0.0.1:27017'
const mongoDB = 'clase19_555'

// Configuracion para usar JSON en el post
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars
app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

// Sessions
app.use(session({
    store: MongoStore.create({
        mongoUrl: mongoURL,
        dbName: mongoDB
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// ROUTES
app.get('/health', (req, res) => res.send(`<h1>OK</h1>`))
app.use('/api/session', sessionRouter)
app.use('/', viewsRouter)


// Conexion mongo & Run the App
mongoose.connect(mongoURL, { dbName: mongoDB })
    .then(() => {
        console.log('Connected 👌 ')
        app.listen(8080, () => console.log('Running 🏃 ...'))
    })
    .catch(e => console.error(e))
