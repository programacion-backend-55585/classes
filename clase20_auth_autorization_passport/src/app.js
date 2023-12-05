import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import sessionRouter from './routes/sessiones.router.js'
import initializePassport from './config/passport.config.js'
import __dirname from './utils.js'

// Variables
const app = express()
const mongoURL = 'mongodb://admin:admin@127.0.0.1:27017'
const mongoDBname = 'clase20_55'

// Data for post json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Sessiones
app.use(session({
    store: MongoStore.create({
        mongoUrl: mongoURL,
        dbName: mongoDBname,
        ttl: 100
    }),
    secret: 'secret'
}))

// Passport
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/', sessionRouter)

mongoose.connect(mongoURL, { dbName: mongoDBname })
    .then(() => app.listen(8080, () => console.log('Running 🏃💨...')))
    .catch(e => console.error(e))
