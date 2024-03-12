import { Router } from "express";
import { getCart, setCartPaid } from "../controllers/cart.controller.js";
import passport from "passport";

const router = Router()

router.get('/', passport.authenticate('jwt'), getCart)
router.post('/:id', setCartPaid)

export default router