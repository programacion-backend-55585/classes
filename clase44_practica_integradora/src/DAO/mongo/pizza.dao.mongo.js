import PizzaModel from "./models/pizza.model.js";

export default class Pizza {

    get = async() => {
        return await PizzaModel.find()
    }

    getById = async(id) => {
        return await PizzaModel.findById(id)
    }

    create = async(pizza) => {
        return await PizzaModel.create(pizza)
    }

}