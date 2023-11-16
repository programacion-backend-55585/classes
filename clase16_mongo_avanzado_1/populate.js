import mongoose from "mongoose";

import studentModel from './models/students.model.js'
import courseModel from './models/courses.model.js'

const mongoURL = 'mongodb+srv://r2:NYHvpWtHcu.3f%40h@clusterr2.h2sfzjo.mongodb.net/'

await mongoose.connect(mongoURL, { dbName: 'clase16_55' })
console.log('DB connected 😎')

// Crear un Estudiante

// const result = await studentModel.create({
//     first_name: 'Mario',
//     last_name: 'Aguilar'
// })
// console.log({result})

// 655565cf27b3b83734173ab4

// Crear un curso

// const result = await courseModel.create({
//     title: 'Defensa Contra las Artes Oscuras',
//     description: 'Saber defenderse de ataques oscuros',
//     difficulty: 5,
//     topics: ['Spectro Patronus', 'Expeliermus', 'Petrificus Totalus'],
//     professor: 'Lupin'
// })
// console.log({ result })

// 6555668e4d2360125759236f

// const student = await studentModel.findById('655565cf27b3b83734173ab4')
// console.log(student)
// student.courses.push({ course: '6555668e4d2360125759236f' })
// const result = await studentModel.updateOne({ _id: '655565cf27b3b83734173ab4' }, student)
// console.log({ result })

const student = await studentModel.findOne({_id: '655565cf27b3b83734173ab4'})
console.log( JSON.stringify(student, null, '\t') )

