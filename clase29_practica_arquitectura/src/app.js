import express from 'express'
import userRouter from './routes/user.router.js'
import storeRouter from './routes/store.router.js'
import orderRouter from './routes/order.router.js'
import config from './config/config.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRouter)
app.use('/api/stores', storeRouter)
app.use('/api/orders', orderRouter)

app.listen(config.port, () => console.log('Listening 🛵...'))