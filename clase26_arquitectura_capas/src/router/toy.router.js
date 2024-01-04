/**
 * Capa de Router [CONTROLLERS]
 * 
 * Se encarga de administrar los endpoints
 * 
 */
import { Router } from "express";
import { create, getAll, turnOff } from "../controllers/toy.controllers.js";

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.put('/turn-off/:id', turnOff)

export default router