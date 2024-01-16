import OrderModel from "./models/orders.model.js";

export default class Order {
    getOrders = async () => { return OrderModel.find() }
    getOrderById = async id => { return OrderModel.findById(id) }
    saveOrder = async order => { return OrderModel.create(order) }
    updateOrder = async (id, order) => {
        return OrderModel.updateOne({ _id: id }, { $set: order })
    }
}