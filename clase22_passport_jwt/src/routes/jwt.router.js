import { Router } from "express";
import { authorization, generateToken } from "../utils.js";
import passport from "passport";

const usersDB = [
    {
        email: 'ezequiel@nyt.com',
        password: 'secret',
        name: 'Ezequien Canan',
        role: 'user'
    },
    {
        email: 'facundo@google.com',
        password: '123456',
        name: 'Facundo Mingorance',
        role: 'seller'
    }
]
const router = Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = usersDB.find(u => u.email === email && u.password === password)
    if (!user) return res.status(401).send({ status: 'error', error: 'invalid credentas' })

    const token = generateToken(user)

    res.cookie('coderCookie', token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true
    }).send({ message: 'Logged In' })
})

router.get('/everyone', (req, res) => {
    res.send({ status: 'success', payload: {} })
})

router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    authorization('user'),
    (req, res) => {
        res.send({ status: 'success', payload: req.user })
    }
)

export default router