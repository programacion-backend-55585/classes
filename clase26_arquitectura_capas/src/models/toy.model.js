/**
 * Capa de Persistencia [MODEL]
 * 
 * Se encarga de todo lo que tenga que ver con Fuente de Datos
 * Memoria, Archivos, DB, SQL, NO SQL
 * 
 * Normalmente cubre todo el CRUD
 */

class ToyModel {

    constructor() {
        this.db = []
    }

    getAll = () => { return this.db }
    getOneById = (id) => { 
        return this.db.find(t => t.id === id)
    }

    create = data => {
        data.id = this.db.length + 1
        this.db.push(data)

        return { result: true, data }
    }

    update = (id, data) => {
        const idx = this.db.findIndex(t => t.id === id)
        data.id = id

        this.db[idx] = data

        return { result: true, data }
    }

}

export default ToyModel