import express from 'express'
import UserModel from './models/users.model.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.json({ status: 'OK' }))

// Listar todos los users
app.get('/api/users', async (req, res) => {
    const users = await UserModel.find() // db.users.find()

    res.json({ status: 'success', payload: users })
})

// Devuelve un solo usuario
app.get('/api/users/:uid', async (req, res) => {
    const userId = req.params.uid

    const user = await UserModel.findOne({ _id: userId })
    const user1 = await UserModel.findById(userId)

    res.json({ status: 'success', payload: user1 })
})

// Crear usuario
app.post('/api/users', async (req, res) => {
    try {
        const data = req.body
        const result = await UserModel.create(data)

        res.json({ status: 'success', payload: result})
    } catch(e) {
        res.status(400).json({status: 'error', error: e})
    }
})

const url = 'mongodb+srv://r2:NYHvpWtHcu.3f%40h@clusterr2.h2sfzjo.mongodb.net/'

mongoose.connect(url, {dbName: 'clase14_555'})
    .then(() => {
        console.log('DB connected. ✊')
        app.listen(8080, () => console.log('Running Server ... 🏃 '))
    })
    .catch(e => {
        console.error('Error connecting to DB 😓')
    })


