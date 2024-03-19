import { Router } from 'express'
import PaymentService from '../services/payment.service.js'

const router = Router()

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async (req, res) => {
    const productId = req.query.id
    if (!productId) return res.status(400).send('No product id')

    const product = products.find(p => p.id == parseInt(productId))
    if (!product) return res.status(400).send('Product not found')

    const data = {
        amount: product.price,
        currency: 'usd',
        payment_method_types: ['card']
    }

    const service = new PaymentService()
    const result = await service.createPaymentIntent(data)

    console.log({ result })
    res.send({ status: 'success', payload: result })
})

export default router