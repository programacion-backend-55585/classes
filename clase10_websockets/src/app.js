import express from 'express'
import { Server } from 'socket.io'
import __dirname from './utils.js'

const app = express()

app.use(express.static(__dirname + '/public'))

const httpServer = app.listen(8080, () => console.log('Running 🏃 ...'))
const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
        console.log(data)

        socket.emit('response', 'Mensaje recibido')
        socket.broadcast.emit('mensaje_al_resto', data)
        socketServer.emit('all', data)

    })
    socket.on('new', name => {
        socket.broadcast.emit('new-user', name)
    })

})