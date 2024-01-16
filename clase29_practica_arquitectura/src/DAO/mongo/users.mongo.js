import UserModel from "./models/users.models.js";

export default class User {
    getUsers = async () => { return UserModel.find() }
    getUserById = async id => { return UserModel.findById(id) }
    saveUser = async user => { return UserModel.create(user) }
}