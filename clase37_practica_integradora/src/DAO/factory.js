import config from '../config/config.js'
import mongoose from 'mongoose'

export let UserDAO
export let TicketDAO

console.log('PERSISTENCE: ', config.persistence)

switch (config.persistence) {
    case 'FILE':

        const { default: UserFile } = await import('./file/users.file.js')
        const { default: TicketFile } = await import('./file/tickets.file.js')

        UserDAO = UserFile
        TicketDAO = TicketFile

        break;

    case 'MONGO':
        await mongoose.connect(config.mongoURL, { dbName: config.mongoDBName })
        console.log('DB connected!')

        const { default: UserMongo } = await import('./mongo/users.mongo.js')
        const { default: TicketMongo } = await import('./mongo/tickets.mongo.js')

        UserDAO = UserMongo
        TicketDAO = TicketMongo

        break;

    default:
        throw new Error(`Persistence don't recognized`)
}