import { Router } from "express";
import { createPizza, getPizzaById, getPizzas } from "../controllers/pizza.controller.js";

const router = Router()

router.get('/', getPizzas)
router.get('/:id', getPizzaById)
router.post('/', createPizza)

export default router