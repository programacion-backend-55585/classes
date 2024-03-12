import dotenv from 'dotenv'

dotenv.config()

export default {
    persistence: process.env.PERSISTENCE || 'MONGO',
    databaseURL: process.env.MONGO_URL,
    databaseNAME: process.env.MONGO_DBNAME,
    port: process.env.PORT || 8080,
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY
}