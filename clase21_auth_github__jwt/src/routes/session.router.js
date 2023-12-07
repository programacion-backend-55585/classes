import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/', (req, res) => res.render('index'))
router.get('/error', (req, res) => res.send('Error'))
router.get('/login', (req, res) => res.render('login'))

router.get(
    '/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    async (req, res) => { }
)

router.get(
    '/githubcallback',
    passport.authenticate('github', {failureRedirect: '/error'}),
    (req, res) => {
        console.log('Callback: ', req.user)

        req.session.user = req.user
        console.log('User Session setted')

        res.redirect('/')
    }
)

export default router