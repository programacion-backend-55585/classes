import mongoose from "mongoose";

export default mongoose.model('contacts', new mongoose.Schema({
    name: String
}))