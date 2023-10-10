import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {
    console.log('Estamos en el endpoint Saludo')
    console.log(req.query)

    const name = req.query?.name ?? 'Nicolas'
    const age = req.query?.age ?? 20

    res.send(`Saludo para mi amigo ${name} !! Tienes ${age} años`)
})

app.listen(8080, ()=> console.log('Listening...'))