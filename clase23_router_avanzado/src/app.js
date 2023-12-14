import express from "express";
import UserRouter from './routes/user.router.js'

const app = express()
const userRouter = new UserRouter()

app.use('/users', userRouter.getRouter())

app.listen(8080)
