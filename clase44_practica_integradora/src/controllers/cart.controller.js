import { CartService } from "../services/index.js";

export const getCart = async(req, res) => {
    const { id: userId } = req.user

    const cart = await CartService.getActiveCartByUserId( userId )
    res.json(cart)
}

export const setCartPaid = async(req, res) => {
    const { id: cartId } = req.params
    return await CartService.setCartPaid(cartId)
}
