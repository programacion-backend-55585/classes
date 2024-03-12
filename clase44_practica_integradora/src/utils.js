import jwt from 'jsonwebtoken'
import config from './config/config.js'

export const generateToken = user => {
    const token = jwt.sign({ user }, config.jwtPrivateKey, { expiresIn: '24h' })
    return token
}