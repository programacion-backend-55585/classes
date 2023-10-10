import express from 'express'
//const express = require('express')

const app = express()

app.get('/', (req, res) => {res.send('Welcome to the Jungle 🎸 !!! ')} )

app.get('/saludo', (request, response) => {
    response.send('<h3>Saludos para mi amigo Alejandro </h3>')
})

app.get('/health', (request, response) => {
    response.send('OK')
})

app.listen(8080, () => {
    console.log('Server is running 🏃 ...')
})