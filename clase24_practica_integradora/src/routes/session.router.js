import { Router } from 'express'
import UserModel from '../models/user.model.js'

const router = Router()

router.get('/', async(req, res) => {
    const users = await UserModel.find().lean()
    res.render('index', { users })
})

router.get('/private', (req, res) => {
    res.render('private', {
        user: {
            name: 'name',
            email: 'email',
            social: 'social',
            role: 'role',
        }
    })
})

router.get('/error', (req, res) => {
    const error = req.query?.error ?? 'Error on Server'

    res.render('error', { error })
})

export default router