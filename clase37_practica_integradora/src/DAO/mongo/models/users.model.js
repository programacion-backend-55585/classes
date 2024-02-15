import mongoose from "mongoose";

const UserModel  = mongoose.model('users', new mongoose.Schema({
    name: String,
    email: String,
    tickets: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "tickets"
            }
        ]
    }
}))

export default UserModel