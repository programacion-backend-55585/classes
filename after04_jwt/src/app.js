import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.use(express.static('./src/public'))

const PRIVATE_KEY = 'MyS3cr3YY asd'

app.get('/create', (req, res) => {
    const message = req.query?.message ?? 'Whatever'

    const token = jwt.sign({message}, PRIVATE_KEY)

    res.json({ token })
})

app.post('/verify', (req, res) => {
    const { token } = req.body

    const message = jwt.verify(token, PRIVATE_KEY)

    res.json({ message })

})

app.listen(8080)