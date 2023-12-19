import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import sessionRouter from './routes/session.router.js'
import __dirname from './utils.js'

const app = express()

// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser())

// Routes
app.use('/', sessionRouter)


// Run
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase24_555' })
    .then(() => app.listen(8080, () => console.log('Running 🏃 ...')))
    .catch(e => console.error(e))