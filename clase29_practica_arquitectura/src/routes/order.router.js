import { Router } from 'express'
import { createOrder, getOrderById, getOrders, resolverOrder } from '../controllers/order.controller.js'

const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrderById)
router.post('/', createOrder)
router.post('/:id', resolverOrder)

export default router