import express from 'express'
import dotenv from 'dotenv'
import { fork } from 'child_process'

dotenv.config()

const app = express()
const PORT = process.env.PORT

console.log('PID master: ', process.pid)

app.get('/', (req, res) => res.send('ok'))

app.get('/suma', (req, res) => {
    
    const child = fork('./src/operacionCompleja.js')

    child.send('Run !!')

    child.on('message', result => {
        res.send(`El resultado de la operacion es ${result}`)
    })

})

app.listen(PORT, () => console.log('Running 🏃 ...'))