import express from 'express'
import userRouter from './routes/users.router.js'
const app = express()

app.use('/api/user', userRouter)

app.listen(8080, () => console.log('Running 🏃 ,,,'))