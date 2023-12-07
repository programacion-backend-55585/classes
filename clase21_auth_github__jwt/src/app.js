import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import handlebars from 'express-handlebars'
import initializePassport from './config/passport.config.js'

import sessionRouter from './routes/session.router.js'
import jwtRouter from './routes/jwt.routes.js'

import __dirname from './utils.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const mongoURL = 'mongodb://admin:admin@127.0.0.1:27017'
const mongoDBname = 'class21_555'

app.use(session({
    secret: 'CoderSecrets',
    resave: true,
    saveUninitialized: true
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/jwt', jwtRouter)
app.use('/', sessionRouter)

mongoose.connect(mongoURL, { dbName: mongoDBname})
    .then(() => app.listen(8080))
    .catch(e => console.error(e))