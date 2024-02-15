import express from 'express'
import userRouter from './routes/users.routes.js'
import ticketRouter from './routes/tickets.routes.js'
import config from './config/config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(config.port, () => console.log(`Running 🏃... (${config.port}) `))