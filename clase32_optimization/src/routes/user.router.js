import { Router } from "express";
import CustomError from "../errors/custom_errors.js";

const users = []
const router = Router()

router.get('/', (req, res) => res.send({ status: 'success', users }))

router.post('/', (req, res) => {
    const user = req.body

    if(!user?.last_name || !user?.first_name || !user?.email) {
        CustomError.createUser(user)
    }

    users.push(user)
    return res.send({ status: 'success', user })
})

export default router