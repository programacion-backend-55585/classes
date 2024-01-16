export default class UserRepository {

    constructor(dao) {
        this.dao = dao
    }

    getUsers = async () => { return this.dao.getUsers() }
    getUserById = async id => { return this.dao.getUserById(id) }
    register = async user => {
        user.role = 'USER'
        return this.dao.saveUser(user)
    }
}