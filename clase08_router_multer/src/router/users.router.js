import { Router } from "express";

const router = Router()

const users = []

router.get('/', (req, res) => {
    res.json(users)
})

router.post('/', (req, res) => {
    const data = req.body

    data.id = users.length + 1
    users.push(data)

    res.json(data)
})

export default router