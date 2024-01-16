import { Router } from 'express'
import { getUserById, getUsers, register } from '../controllers/user.controller.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', register)


export default router
