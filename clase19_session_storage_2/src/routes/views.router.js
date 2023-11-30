import { Router } from 'express'

const router = Router()

// MIddlewares --------------------------------
function justPublicWitoutSession(req, res, next) {
    if(req.session?.user) return res.redirect('/profile')
    
    return next()
}

function auth(req, res, next) {
    if(req.session?.user) return next()

    res.redirect('/login')
}

// Renders -----------------------------
router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/login', justPublicWitoutSession, (req, res) => {
    return res.render('login', {})
})

router.get('/register', justPublicWitoutSession, (req, res) => {
    return res.render('register', {})
})

router.get('/profile', auth, (req, res) => {
    const user = req.session.user

    res.render('profile', user)
})

export default router