import FileManager from "./file.manager.js";

export default class Order extends FileManager {

    constructor(filename = './db.orders.json') {
        super(filename)
    }

    getOrders = async () => { return this.get() }
    getOrderById = async id => { return this.getById(id) }
    saveOrder = async order => { return this.add(order) }
    updateOrder = async (id, order) => {
        return this.update(id, order)
    }

}