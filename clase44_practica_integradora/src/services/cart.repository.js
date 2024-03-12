
export default class CartRepository {

    constructor(cartDAO) {
        this.cartDAO = cartDAO
    }

    getActiveCartByUserId = async (userId) => {
        let cart = await this.cartDAO.getByUserId(userId)
        if (!cart) {
            cart = await this.cartDAO.create(userId)
        }

        return cart
    }

    setCartPaid = async (cartId) => {
        return await this.cartDAO.update(cartId, { active: false })
    }

}