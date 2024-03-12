

export default class UserRepository {

    constructor(userDAO) {
        this.userDAO = userDAO
    }

    getAll = async() => {
        return await this.userDAO.get()
    }

    getById = async(id) => {
        return await this.userDAO.getById(id)
    }

    getByEmail = async(email) => {
        return await this.userDAO.getByEmail(email)
    }

    create = async(user) => {
        return await this.userDAO.create(user)
    }

}