import mongoose from "mongoose";
import config from "../config/config.js";

export let Contacts
console.log(`Persistence with ${config.persistence}`)

switch (config.persistence) {
    case 'MEMORY':
        const { default: ContactsMemory } = await import('./memory/contacts.memory.js')
        Contacts = ContactsMemory

        break;
    case 'FILE':
        const { default: ContactsFile } = await import('./file/contacts.file.js')
        Contacts = ContactsFile

        break

    case 'MONGO':
        await mongoose.connect(config.mongoURL, {dbName: config.mongoDBName})
        console.log('DB connected!!')

        const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js')
        Contacts = ContactsMongo

        break

    default:
        throw new Error('Persistencie is not configured !!')
}