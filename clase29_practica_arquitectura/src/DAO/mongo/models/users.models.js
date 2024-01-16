import mongoose from "mongoose";

const UserModel = mongoose.model('users', new mongoose.Schema({
    name: String,
    email: String,
    role: String
}))

export default UserModel