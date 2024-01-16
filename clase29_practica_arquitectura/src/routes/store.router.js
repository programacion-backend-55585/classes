import { Router } from 'express'
import { addProduct, addStore, getStoreById, getStores } from '../controllers/store.controller.js'

const router = Router()

router.get('/', getStores)
router.get('/:id', getStoreById)
router.post('/', addStore)
router.post('/:id/product', addProduct)


export default router
