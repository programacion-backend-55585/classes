import Mail from '../modules/mail.module.js'
import { UserDAO, TicketDAO } from "../DAO/factory.js";

import UserRepository from "./users.repository.js";
import TicketRepository from "./tickets.repository.js";

const ticketDao = new TicketDAO()
const userDao = new UserDAO()
const mailModule = new Mail()

export const UserService = new UserRepository(userDao, ticketDao, mailModule)
export const TicketService = new TicketRepository(ticketDao)