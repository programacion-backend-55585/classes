import express from 'express'
import config from './config/config.js'
import session from 'express-session'
import pizzaRouter from './routes/pizza.route.js'
import sessionRouter from './routes/session.route.js'
import cartRouter from './routes/cart.route.js'
import initializePassport from './config/passport.config.js'
import passport from 'passport'

const app = express()
app.use(express.json())

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

initializePassport()
app.use(passport.initialize())

app.get('/', (req, res) => res.send('Pizza Planet'))
app.use('/api/pizza', pizzaRouter)
app.use('/api/session', sessionRouter)
app.use('/api/cart', cartRouter)

app.listen(config.port, () => console.log(`Running 🏃...`))