
export default class TicketRepository {
    constructor(dao) {
        this.dao = dao
    }

    get = async () => { return this.dao.get() }
    getByID = async id => { return this.dao.getByID() }
    create = async(data) => {
        return this.dao.create(data)
    }
}