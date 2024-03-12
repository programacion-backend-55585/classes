import CartModel from "./models/cart.model.js";

export default class Cart {

    get = async() => {
        return await CartModel.find()
    }

    getByUserId = async(userId, active = true) => {
        return await CartModel.findOne({ user: userId, active })
            .populate('pizzas.pizza')
            .exec();
    }

    create = async(userId) => {
        return await CartModel.create({
            pizzas: [],
            user: userId,
            active: true
        })
    }

    update = async(id, cart) => {
        console.log({id, cart})
        return await CartModel.updateOne({_id: id}, { $set: cart })
    }

}