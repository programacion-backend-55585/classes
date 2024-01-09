
import mongoose from "mongoose";

export default class MongoSingleton {

    static #instance

    constructor() {
        mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase27_55'})
            .then(() => console.log('DB connected'))
            .catch(e => console.error(e))
    }

    static getInstance() {

        if(this.#instance) {
            console.log('Already connected!')
            
            return this.#instance
        }

        this.#instance = new MongoSingleton()
        console.log('Se crea la instancia')

        return this.#instance
    }

}