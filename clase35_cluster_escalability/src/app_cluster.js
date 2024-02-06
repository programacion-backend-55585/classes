import cluster from 'cluster'
import express from 'express'
import { cpus } from 'os'

if(cluster.isPrimary) {
    console.log(`[${process.pid}] Proceso primario. Generado por el user`)
    const countCPUs = cpus().length
    console.log(`Numero de CPUS: -----------------------------> ${countCPUs}`)

    for(let i = 0; i < countCPUs; i++) {
        cluster.fork()
    }

} else {
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

}   