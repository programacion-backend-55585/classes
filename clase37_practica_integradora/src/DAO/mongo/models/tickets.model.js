import mongoose from "mongoose";

const TicketModel = mongoose.model('tickets', new mongoose.Schema({
    name: String,
    description: String,
    code: {
        type: String,
        unique: true
    }
}))

export default TicketModel