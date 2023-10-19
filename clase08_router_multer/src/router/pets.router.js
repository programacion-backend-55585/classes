import { Router } from 'express'

const router = Router()

const pets = []

router.use(function(req, res, next) {
    console.log('ESTO ES MASCOTAS')
    next()
})

router.get('/', (req, res) => {
    res.json(pets)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const pet = pets.find(p => p.id == id)

    res.json(pet)
})

router.post('/', (req, res) => {
    const data = req.body

    data.id = pets.length + 1
    pets.push(data)

    res.json(data)
})

export default router

