import express from 'express'

const app = express()

app.get('/simple', (req, res) => {
    let suma = 0
    for(let i = 0; i < 1_000_000; i++) {
        suma += i
    }

    res.send({suma})
})

app.get('/complex', (req, res) => {
    let suma = 0
    for(let i = 0; i < 5e8; i++) {
        suma += i
    }

    res.send({suma})
})



app.listen(8080, () => { console.log('Running 🏃 ...')})