import express from 'express'
import mongoose from 'mongoose'
import config from './config/config.js'
import contactsRouter from './routes/contacts.router.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('OK'))
app.use('/contacts', contactsRouter)

mongoose.connect(config.mongoURL, {dbName: config.mongoDBName})
    .then(r => {
        console.log('DB connected.')
        app.listen(8080, () => console.log('Runnig 🏃 ...'))
    })
    .catch(e => console.error(e))