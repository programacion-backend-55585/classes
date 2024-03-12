import { Pizza, User, Cart } from '../DAO/factory.js'
import CartRepository from './cart.repository.js'
import PizzaRepository from './pizza.repository.js'
import UserRepository from './user.repository.js'

export const UserService = new UserRepository(new User())
export const PizzaService = new PizzaRepository(new Pizza())
export const CartService = new CartRepository(new Cart())