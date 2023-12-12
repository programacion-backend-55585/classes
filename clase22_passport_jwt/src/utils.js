import { fileURLToPath } from 'url'
import { dirname } from 'path'
import jwt from 'jsonwebtoken'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PRIVATE_KEY = 'coderTokenForJWT'

export default __dirname

export const generateToken = (user) => {
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' })

  return token
}

export const authorization = role => {

  return async (req, res, next) => {

    const user = req.user
    console.log(user)

    if (!user) return res.status(401).send({ error: 'Unauthorized' })
    if( user.user.role != role ) return res.status(403).send({error: 'No permisions'})

    return next()
  }

}

// ESTO YA NO SE USA, AHORA USAMOS PASSPORT 😎😎
// export const authToken = (req, res, next) => {
//     const token = req.cookies['coderCookie']

//     if(!token) return res.status(401).send({error: 'no auth'})

//     jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
//         if(error) return res.status(403).send('NO authorized')

//         req.user = credentials.user
//         next()
//     })
// }
