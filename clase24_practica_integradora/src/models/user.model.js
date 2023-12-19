import mongoose from "mongoose";

const UserModel = mongoose.model('users', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    social: String,
    role: String
}))

export default UserModel