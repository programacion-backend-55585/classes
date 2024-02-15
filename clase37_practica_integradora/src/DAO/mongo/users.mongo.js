import UserModel from "./models/users.model.js"

export default class UserDAO {
    get = async () => { return UserModel.find() }
    create = async data => { return UserModel.create(data) }
    getByID = async _id => { return UserModel.findById(_id) }
    update = async data => { return UserModel.updateOne({ _id: data._id }, data) }
}