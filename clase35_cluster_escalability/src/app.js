import express from 'express'

const app = express()

app.get('/', (req, res) => res.send(`Desdel el worker con PID: ${process.pid}`))

app.get('/simple', (req, res) => {
    let sum = 0;
    for(let i = 0; i < 1_000_000; i++) sum += i
    res.send({sum})
})

app.get('/complex', (req, res) => {
    let sum = 0;
    for(let i = 0; i < 5e8; i++) sum += i
    res.send({sum})
})

app.listen(8080, () => console.log(`[${process.pid}] Server running 🏃....`))

/**
 * 
 * Comandos para docker:
 * 
 * ===Crear imagen
 * docker build -t imagendemayrene .
 * 
 * ===Ver lista de imagenes
 * docker images
 * 
 * ====Correr un container
 * docker run -d -p 8080:8080 --name firstcontainer imagendemayrene
 */