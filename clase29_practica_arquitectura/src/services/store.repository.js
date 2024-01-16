export default class StoreRepository {
    constructor(dao) {
        this.dao = dao
    }

    getStores = async () => { return this.dao.getStores() }
    getStoreById = async id => { return this.dao.getStoreById(id) }
    addStore = async store => { 
        return this.dao.saveStore(store)
    }
    addProduct = async(id, product) => {
        const store = await this.getStoreById(id)
        store.products.push(product)

        return this.dao.updateStore(id, store)
    }
}