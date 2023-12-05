import mongoose from "mongoose";

const UserModel = mongoose.model('users', new mongoose.Schema({
    email: String,
    password: String,
    name: String
}))

export default UserModel