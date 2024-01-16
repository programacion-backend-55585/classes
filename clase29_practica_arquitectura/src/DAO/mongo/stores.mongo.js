import StoreModel from "./models/stores.model.js";

export default class Store {
    getStores = async () => { return StoreModel.find() }
    getStoreById = async id => { return StoreModel.findById(id) }
    saveStore = async store => { return StoreModel.create(store) }
    updateStore = async (id, store) => {
        return StoreModel.updateOne({ _id: id }, { $set: store })
    }
}