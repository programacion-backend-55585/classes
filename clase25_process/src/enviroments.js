import { config } from "dotenv"

console.log(process.env.VAR)

config({ path: '.env' })

const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URL
const MONGO_DBNAME = process.env.MONGO_DBNAME
const NODE_ENV = process.env.NODE_ENV

console.log({ PORT, NODE_ENV, MONGO_URL, MONGO_DBNAME  })