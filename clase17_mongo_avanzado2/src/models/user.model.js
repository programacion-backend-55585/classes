import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String
})

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model('users', userSchema)

export default userModel