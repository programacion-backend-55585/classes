import express from 'express'
import cors from 'cors'
import paymetRouter from './routes/payments.router.js'

const app = express()
app.use(cors())
app.use('/api/payments', paymetRouter)
app.listen(8080, () => {
    console.log('Listening 🏃 ...')
})