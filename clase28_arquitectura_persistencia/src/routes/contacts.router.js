import { Router } from "express";
import { contactService } from "../repositories/index.js";

const router = Router()

router.get('/', async (req, res) => {
    const result = await contactService.getContacts()
    res.send({ status: 'success', payload: result })
})

router.post('/', async (req, res) => {
    const contactBody = req.body
    
    const result = await contactService.createContact(contactBody)
    res.send({ status: 'success', payload: result })
})

export default router