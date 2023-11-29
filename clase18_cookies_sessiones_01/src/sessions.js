import session from 'express-session'
import express from 'express'

const app = express()
app.use(session({
    secret: 'secret',
    resave: true, // Para mantener la session activa
    saveUninitialized: true // Guardar cualquiar cosa, asi sea datos vacios
}))

app.get('/session', (req, res) => {
    if(req.session.contador) {
        req.session.contador++

        return res.send(`Se ha visitado el sitio ${req.session.contador}`)
    }
    
    req.session.contador = 1
    res.send('Welcome !!')
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.send('Logout error')

        return res.send('LOgout OK')
    })
})

app.get('/', (req, res) => res.send('Ok'))

// LOGIN !!

const DB = [
    {
        name: 'Mayrene Mora',
        username: 'mayrene',
        password: 'secret',
        rol: 'admin'
    }
]

app.get('/login', (req, res) => {
    const { username, password } = req.query

    const user =  DB.find(u => u.username === username && u.password === password)
    if(!user) return res.status(400).send('Invalid credentials')

    req.session.user = user

    res.send('Login Success!!')
})

function authentication(req, res, next) {
    if(req.session?.user) return next()

    return res.status(401).send('error de authentication')
}

app.get('/private', authentication, (req, res) => {
    res.send('Esta pagina la puede ver la persona logeada ' + JSON.stringify(req.session.user))
})

app.listen(8080)