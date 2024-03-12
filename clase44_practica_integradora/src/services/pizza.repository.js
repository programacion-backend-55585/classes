

export default class PizzaRepository {

    constructor(dao) {
        this.dao = dao
    }

    getAll = async() => {
        return await this.dao.get()
    }

    getById = async(id) => {
        return await this.dao.getById(id)
    }

    create = async(pizza) => {
        return await this.dao.create(pizza)
    }

}