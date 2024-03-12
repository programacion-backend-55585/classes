import mongoose, { Mongoose } from "mongoose";

const CartModel = mongoose.model("carts", new mongoose.Schema({
    pizzas: {
        type: [{
            pizza: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "pizzas"
            },
            quantity: Number
        }],
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    active: Boolean
}))

export default CartModel