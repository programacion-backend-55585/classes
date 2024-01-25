import express from 'express'
import userRouter from './routes/user.router.js'
import errorHandler from './middlewares/errors.js'

const app = express()
app.use(express.json())
app.use('/api/user', userRouter)
app.use(errorHandler)

app.listen(8080)