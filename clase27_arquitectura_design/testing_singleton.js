import MongoSingleton from "./MongoSingleton.js";

const mongoInstance = MongoSingleton.getInstance()

const anotherMongoInstance = MongoSingleton.getInstance()

console.log( mongoInstance === anotherMongoInstance)