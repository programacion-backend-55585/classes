import UserModel from './models/users.model.js'
import mongoose from 'mongoose'

const mongoUrl = 'mongodb+srv://r2:NYHvpWtHcu.3f%40h@clusterr2.h2sfzjo.mongodb.net/'

await mongoose.connect(mongoUrl, { dbName: 'clase16_55' })
console.log('DB connected 😎')

const result = await UserModel.find({first_name: 'Celia'}).explain('executionStats')

console.log(result)

/**
 * .find()                      3 Milisegundos
 * .find('Celia')               4 milisegundos
 * .find('Celia', index: true)  1 milisegundos
 * 
 */