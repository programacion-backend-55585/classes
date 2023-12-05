import { Router } from 'express'
import UserModel from '../model/user.model.js'
import passport from 'passport'
import { createHash, isValidPassword } from '../utils.js'

const router = Router()

// Middleware
function auth(req, res, next) {
    if (req.session?.user) return next()

    res.status(401).send('Not Authenticate')
}

// Render
router.get('/', (req, res) => res.render('index', {}))
router.get('/login', (req, res) => res.render('login', {}))
router.get('/register', (req, res) => res.render('register', {}))
router.get('/profile', auth, (req, res) => {
    const { user } = req.session
    res.render('profile', user)
})

router.post(
    '/login',
    passport.authenticate('login', { failureRedirect: '/' }),
    async (req, res) => {
        if (!req.user) return res.status(400).send('Invalid Credentiasls')

        req.session.user = req.user
        return res.send('Logged !!!')
    }
)

router.post(
    '/register',
    passport.authenticate('register', { failureRedirect: '/' }),
    async (req, res) => {
        res.send('Registered!!')
    }
)

export default router