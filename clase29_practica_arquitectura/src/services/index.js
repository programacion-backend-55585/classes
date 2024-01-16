import { User, Order, Store } from '../DAO/factory.js'

import UserRepository from './user.repository.js'
import StoreRepository from './store.repository.js'
import OrderRepository from './order.repository.js'

export const UserService = new UserRepository(new User())
export const StoreService = new StoreRepository(new Store())
export const OrderService = new OrderRepository(new Order())