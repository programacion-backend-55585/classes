/**
 * Capa de Controllers [CONTROLLERS]
 * 
 * Se encarga de aspectos de HTTP (request & responses)
 */

import ToyService from "../services/toy.services.js";

const toyService = new ToyService()

export const getAll = (req, res) => {
    res.json(toyService.getAll())
}

export const create = (req, res) => {
    const data = req.body

    res.json(toyService.create(data))
}

export const turnOff = (req, res) => {
    const id = parseInt(req.params.id)

    res.json(toyService.turnOff(id))
}