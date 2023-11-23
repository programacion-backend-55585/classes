import { Router } from 'express'
import userModel from '../models/user.model.js'

const router = Router()

router.get('/', async(req, res) => {

    const limit = parseInt(req.query?.limit ?? 10 )
    const page = parseInt(req.query?.page ?? 1)

    const result  = await userModel.paginate({}, {
        page,
        limit,
        lean: true // Pasar a formato JSON .lean().exec()
    })

    console.log(result)
    res.render('index', result)
})

export default router