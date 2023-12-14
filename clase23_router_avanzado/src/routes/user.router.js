import jwt from 'jsonwebtoken'
import Router from './router.js'

export default class UsersRouter extends Router {
  init() {
    this.get('/', ['PUBLIC'], (req, res) => {
      res.sendSucess('Hola Coders!!')
    })

    this.get('/login', ['PUBLIC'], (req, res) => {
      const role = req.query?.role ?? 'USER'
      const email = req.query.email

      const user = { email, role }
      const token = jwt.sign(user, 'secret')

      res.sendSucess(token)
    })

    this.get('/admin', ['ADMIN'], (req, res) => {
      res.sendSucess('Hola Coders!!')
    })

    this.post('/:word', ['USER'], (req, res) => {
      const { word } = req.params

      res.sendSucess({ word, user: req.user })
    })
  }
}