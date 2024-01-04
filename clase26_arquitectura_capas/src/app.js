import express from 'express'
import router from './router/toy.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/toy', router)

app.listen(8080, () => console.log('Running 🏃 ...'))