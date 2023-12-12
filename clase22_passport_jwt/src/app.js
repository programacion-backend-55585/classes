import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import __dirname from './utils.js'

import viewsRouter from './routes/views.router.js'
import jwtRouter from './routes/jwt.router.js'
import initializePassport from './config/passport.config.js'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

initializePassport()
app.use(passport.initialize())

app.use('/jwt', jwtRouter)
app.use('/', viewsRouter)


mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase22_55' })
    .then(() => app.listen(8080, () => console.log(`Running 🏃 ...`)))
    .catch(e => console.error)
