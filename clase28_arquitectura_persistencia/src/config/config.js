import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE,
    mongoURL: process.env.MONGO_URL,
    mongoDBName: process.env.MONGO_DB_NAME
}