import { Router } from "express";
import jwt from 'jsonwebtoken'

export default class R2_Router {

  constructor() {
    this.router = Router()
    this.init()
  }

  getRouter() {
    return this.router
  }

  init() { }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomResponse,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    )
  }
  
  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.generateCustomResponse,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    )
  }

  applyCallbacks(callbacks) {
    return callbacks.map(callback => async (...params) => {

      try {
        // params( req, res, next)
        // apply apunta directamente a la funcion callback
        // this es para que se utilize en el contexto de la calase R2_Router
        await callback.apply(this, params)
      } catch (error) {
        console.log(error)
        params[1].status(500).send(error)
      }

    })
  }

  generateCustomResponse = (req, res, next) => {
    res.sendSucess = payload => res.json({ status: 'success', payload })
    res.sendServerError = error => res.status(500).json({ status: 'error', error })
    res.sendUserError = error => res.status(400).json({ status: 'error', error })
    res.sendNoAuthenticatedError = (error = 'No auth') => res.status(401).json({ status: 'error', error })
    res.sendNoAuthorizadError = (error = 'No authorized') => res.status(403).json({ status: 'error', error })

    next()
  }

  handlePolicies = policies => (req, res, next) => {
    if(policies.includes('PUBLIC')) return next()

    if(policies.length > 0) {
      const token = req.headers.auth

      if(!token) return res.sendNoAuthenticatedError('No token')

      const user = jwt.verify(token, 'secret')

      if( !policies.includes(user.role.toUpperCase())) {
        return res.sendNoAuthorizadError()
      }

      req.user = user
      return next()
    }

    return res.sendNoAuthenticatedError('This resource is private ')
  }

}