export default class OrderRepository {
    constructor(dao) {
        this.dao = dao
    }

    getOrders = async () => { return this.dao.getOrders() }
    getOrderById = async id => { return this.dao.getOrderById(id) }
    createOrder = async order => {
        order.status = 'PENDING'
        return this.dao.saveOrder(order)
    }

    resolverOrder = async(id, resolve) => {
        const order = await this.getOrderById(id)
        order.status = resolve

        return this.dao.updateOrder(id, order)
    }
}