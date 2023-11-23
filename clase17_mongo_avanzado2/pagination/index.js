import mongoose from "mongoose";
import userModel from "./models/user.model.js";

await mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase17_555' })
console.log('DB connected!! 👌')

const users = await userModel.paginate({}, {
    limit: 5, page: 2
})

console.log(users)
