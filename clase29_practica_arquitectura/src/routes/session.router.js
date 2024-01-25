import { Router } from 'express'
import passport from 'passport'
import UserModel from '../models/user.model.js'

const router = Router()

// HOME
router.get('/', async (req, res) => {
    const users = await UserModel.find().lean()
    res.render('index', { users })
})

// GITHUB
router.get(
    '/githublogin',
    passport.authenticate('github', { scope: ['user:email'] }),
    (req, res) => { }
)

router.get(
    '/githubcallback',
    passport.authenticate(
        'github',
        { failureRedirect: '/error?error=GithubFail' }
    ),
    (req, res) => {
        if (!req.user) {
            return res.status(400).send('Invalid github')
        }

        res.cookie('cookieJWT', req.user.token).redirect('/')
    }
)


// PRIVATE wiht JWT
router.get(
    '/private',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { user } = req.user
        console.log({ user })
        res.render('private', { user })
    }
)

router.get(
    '/create-product',
    current(['ADMIN', 'PREMIUM'])
    (req, res) => { ... }
)

router.get(
    '/delete-product',
    (req, res) => { ... }
)


router.get('/error', (req, res) => {
    const error = req.query?.error ?? 'Error on Server'

    res.render('error', { error })
})

export default router