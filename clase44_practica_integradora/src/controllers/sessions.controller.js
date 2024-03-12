import { generateToken } from "../utils.js";

export const login = async(req, res) => {
    if(!req.user) {
        return res.status(400).json({ error: 'Invalid credentiasl'})
    }

    const token = generateToken(req.user)
    res.json({token})
}

export const register = async(req, res) => {
    return res.json({ status: 'success'})
}

export const privateUser = async(req, res) => {
    res.json({ user: req.user })
}

export const errorUser = async(req, res) => {
    res.json({ error: true })
}