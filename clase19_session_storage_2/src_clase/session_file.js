import express from 'express'
import session from 'express-session'
import FileStore from 'session-file-store'

const app = express()
const fileStore = FileStore(session)

app.use(session({
    store: new fileStore({
        path: './sessions',
        retries: 2
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => res.send('ok'))
app.get('/login', (req, res) => {
    if(req.session.user) return res.send('Already logged')

    const { username } = req.query
    if(!username) return res.status(400).send('Need an username')

    req.session.user = username
    return res.send('Login Success')
})

function auth(req, res, next) {
    return req.session?.user ? next() : res.status(401).send('Auth error')
}

app.get('/private', auth, (req, res) => {
    res.send(`Private page ${JSON.stringify(req.session.user)}`)
})

app.listen(8080, () => {console.log('Running 🏃 ...')})