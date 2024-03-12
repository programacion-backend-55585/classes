import mongoose from "mongoose";

const UserModel = mongoose.model('users', new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    role: String
}))

export default UserModel