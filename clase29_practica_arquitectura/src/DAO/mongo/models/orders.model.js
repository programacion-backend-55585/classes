import mongoose from "mongoose";

const OrderModel = mongoose.model('orders', new mongoose.Schema({
    number: Number,
    status: String,
    totalPrice: Number,
    store: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'stores'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    }
}))

export default OrderModel