import { Router } from "express";

const router = Router()

router.get('/login', (req, res) => res.render('login', {}) )
router.get('/', (req, res) => res.render('home', {}) )

export default router