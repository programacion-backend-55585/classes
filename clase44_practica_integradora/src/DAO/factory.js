import config from '../config/config.js'
import mongoose from 'mongoose'

export let Pizza
export let User
export let Cart

console.log(`Persistence with ${config.persistence}`)

switch (config.persistence) {
    case 'MONGO':
        
        await mongoose.connect(config.databaseURL, { dbName: config.databaseNAME } )
        console.log('DB connected!')

        const { default: PizzaMongo } = await import('./mongo/pizza.dao.mongo.js')
        const { default: UserMongo } = await import('./mongo/user.dao.mongo.js')
        const { default: CartMongo } = await import('./mongo/cart.dao.mongo.js')

        Pizza = PizzaMongo
        User = UserMongo
        Cart = CartMongo

        break;

    default:
        throw 'Persistence is not defined'
}