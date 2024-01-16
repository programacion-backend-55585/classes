import FileManager from "./file.manager.js";

export default class User extends FileManager {

    constructor(filename = './db.users.json') {
        super(filename)
    }

    getUsers = async() => { return this.get() }
    getUserById = async id => { return this.getById(id) }
    saveUser = async user => { return this.add(user) }

}