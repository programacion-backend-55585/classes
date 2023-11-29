import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

// COnectamos cookies a nuestro server
app.use(cookieParser('secret'))

app.get('/', (req, res) => { res.send('<h1>My Cookies</h1>') })

app.get('/set', (req, res) => {
    res
        .cookie('cookieMario', 'Thanos siempre tuvo razon')
        .cookie('meMuero', "Nooooooooooooooo", { maxAge: 5_000 })
        .cookie('cookieSigned', 'No sabes que hay aqui Buahahaha', { signed: true } )
        .send('<h1>Cookie seteada</h1>')
})

app.get('/get', (req, res) => {
    const cookies = req.cookies
    const cookiesSigned = req.signedCookies
    console.log(cookies)
    console.log(cookiesSigned)

    res.send(`<p>${JSON.stringify(cookies)}<br>${JSON.stringify(cookiesSigned)}</p>`)
})

app.get('/delete', (req, res) => {
    res.clearCookie('cookieMario').send('<h1>Cookie deleted</h1>')
})


app.listen(8080)