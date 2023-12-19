import { fileURLToPath } from 'url'
import { dirname } from 'path'
import jwt from 'jsonwebtoken'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default __dirname

// JWT
export const generateToken = user => {
    return jwt.sign({ user }, 'secretForJWT', { expiresIn: '24h' })
}