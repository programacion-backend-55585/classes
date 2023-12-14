import express from 'express'

const app = express()

app.param('word', async(req, res, next, word) => {
    if(!word) req.word = null
    else req.params.word = word.toLowerCase()

    next()
})

app.get('/api/dictionary/:word', (req, res) => {
    const { word } = req.params
    res.send({ word })
})

app.get('/api/dictionary/:word/:language([a-z][a-z])', (req, res) => {
    const { word, language } = req.params
    res.send({ word, language })
})

app.put('/api/dictionary/:word', (req, res) => {
    res.send({ status: 'added' })
})

app.delete('/api/dictionary/:word', (req, res) => {
    res.send({ status: 'delete' })
})

app.get('*', (req, res) => {
    res.status(404).send('Cannot get the specified word')
})

app.listen(8080)