import { PizzaService } from "../services/index.js";

export const getPizzas = async(req, res) => {
    return res.json(await PizzaService.getAll())
}

export const getPizzaById = async(req, res) => {
    const { id } = req.params
    return res.json(await PizzaService.getById(id))
}

export const createPizza = async(req, res) => {
    const pizza = req.body
    return res.json(await PizzaService.create(pizza))
}

