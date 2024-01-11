import { Router } from "express";

import { Contacts } from "../DAO/factory.js";

const router = Router()
const contactsService = new Contacts()

router.get('/', async (req, res) => {
    const result = await contactsService.get()
    res.send({ status: 'success', payload: result })
})

router.post('/', async (req, res) => {
    const contactBody = req.body

    const result = await contactsService.insert(contactBody)
    res.send({ status: 'success', payload: result })
})

export default router