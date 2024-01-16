import FileManager from "./file.manager.js";

export default class Store extends FileManager {

    constructor(filename = './db.stores.json') {
        super(filename)
    }

    getStores = async () => { return this.get() }
    getStoreById = async id => { return this.getById(id) }
    saveStore = async store => { return this.add(store) }
    updateStore = async (id, store) => {
        return this.update(id, store)
    }

}