import mongoose from 'mongoose'

const UserModel = mongoose.model('users', mongoose.Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String
}))

export default UserModel