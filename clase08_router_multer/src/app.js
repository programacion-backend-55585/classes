import express from 'express'
import routerPets from './router/pets.router.js'
import routerUsers from './router/users.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    console.log(`[${req.url}] Time: ${new Date().toLocaleTimeString()}`)

    next()
})

// Middleware de endpoint, agrega un dato
function addData(req, res, next) {
    req.dato1 = 'My Data'
    console.log('Data agregado al request')
    next()
}
// Middleware de endpoint, bloquea si en la url no tiene 'r2'
function bloquear(req, res, next) {
    if(req.url.includes('r2')) {
        next()
    }

    res.send('No tiene el parametro R2')
}

app.use('/static',  express.static( './src/public' ))

app.get('/', addData, bloquear, (req, res, next) => {
    console.log('Ver data: ', req.dato1)
    res.send('OK')
})
app.get('/r2', bloquear, (req, res) => {
    console.log('Ver data: ', req.dato1)
    res.send('OK from saludo')
})

app.use('/api/pets', routerPets)
app.use('/api/users', routerUsers)


app.listen(8080, () => console.log('Listening 🏃 ....'))