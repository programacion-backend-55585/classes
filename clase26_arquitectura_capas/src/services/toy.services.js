/**
 * Capa de Servicio o capa de Negocio [CONTROLLERS]
 * 
 * Se encarga de los aspectos o funcionalidades del Negocio
 * ej: Apagar un Juguete no es una funcion de DB,
 * es propio del negocio
 * 
 */

import ToyModel from "../models/toy.model.js";

class ToyService {

    constructor() {
        this.toyModel = new ToyModel()
    }

    getAll = () => { return this.toyModel.getAll() }

    create = data => {
        return this.toyModel.create(data)
    }

    turnOff = id => {
        const data = this.toyModel.getOneById(id)
        data.turn = false

        const result = this.toyModel.update(id, data)

        return result
    }

}

export default ToyService