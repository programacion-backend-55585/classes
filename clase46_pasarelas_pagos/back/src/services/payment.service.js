import Stripe from 'stripe'
const key = 'sk_test_51N3lXDAlF2tzZ3EGTJw9ibAVzV7hnFSsqbcXEEtw7k1vcj4rV1tPiiN8gJt3f5QP6PfVFLhXd2sJP7ChZFmBkNmq007KiYeusa'

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(key)
    }

    createPaymentIntent = async(data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data)
        return paymentIntent
    }
}