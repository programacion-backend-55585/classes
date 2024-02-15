import TicketModel from "./models/tickets.model.js"

export default class TicketDAO {
    get = async () => { return TicketModel.find() }
    create = async data => { return TicketModel.create(data) }
    getByID = async _id => { return TicketModel.findById(_id) }
    update = async data => { return TicketModel.update({ _id: data._id }, data) }
}