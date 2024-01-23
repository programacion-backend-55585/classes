import { Router } from "express";
import { generateUser } from "../utils.js";

const router = Router()

router.get('/', async(req, res) => {
    const users = []

    for(let i = 0; i < 3; i++) {
        users.push(generateUser())
    }


    res.send({status: 'success', users })
})

export default router