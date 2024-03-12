import { Router } from "express";
import { errorUser, login, privateUser, register } from "../controllers/sessions.controller.js";
import passport from "passport";


const router = Router()

router.post('/register', passport.authenticate('register', { failureRedirect: '/api/session/error'}), register)
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/session/error'}), login)
router.get('/private', passport.authenticate('jwt'), privateUser)
router.get('/error', errorUser)

export default router