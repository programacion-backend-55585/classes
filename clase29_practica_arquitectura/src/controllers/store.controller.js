import { StoreService } from "../services/index.js";

export const getStores = async (req, res) => {
    const result = await StoreService.getStores()
    res.json({ status: 'success', payload: result })
}

export const getStoreById = async (req, res) => {
    const { id } = req.params
    const result = await StoreService.getStoreById(id)

    res.json({ status: 'success', payload: result })
}

export const addStore = async (req, res) => {
    const store = req.body

    const result = await StoreService.addStore(store)
    res.json({ status: 'success', payload: result })
}

export const addProduct = async (req, res) => {
    const product = req.body
    const { id } = req.params

    const result = await StoreService.addProduct(id, product)
    res.json({ status: 'success', payload: result })
}
