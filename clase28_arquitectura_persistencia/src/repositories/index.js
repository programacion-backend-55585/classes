import { Contacts } from "../DAO/factory.js";
import ContactRepository from "./contacts.repository.js";

export const contactService = new ContactRepository(new Contacts())