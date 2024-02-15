import FileManager from "./manager.file.js";

export default class TicketDAO {
    constructor() {
        this.fileManager = new FileManager('tickets.json')
    }

    get = async () => { return this.fileManager.get() }
    create = async data => { return this.fileManager.add(data) }
    getByID = async _id => { return this.fileManager.getOneByParam('_id', _id) }
    update = async data => { return this.fileManager.update(data) }
}