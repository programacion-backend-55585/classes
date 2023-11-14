import { Router } from "express";
import PokeModel from "../models/poke.models.js";

const router = Router()

router.get('/', async (req, res) => {
    // .lean().exec() Sirve para renderizar en handlebars
    const pokemons = await PokeModel.find().lean().exec()
    console.log({ pokemons })

    res.render('list', { pokemons })
})

router.post('/', async (req, res) => {
    try {
        const pokemonNew = req.body
        const result = await PokeModel.create(pokemonNew)

        console.log({ result })
        res.redirect('/pokemon')
    } catch (error) {

        console.log(error)
        res.send('Error al crear pokemoins')
    }
})

router.get('/create', async (req, res) => {
    res.render('create', {})
})


router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params
        const pokemon = await PokeModel.findOne({ name }).lean().exec()

        res.render('one', { pokemon })
    } catch (error) {
        console.log(error)
        res.send('Error to show pokemon')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await PokeModel.deleteOne({ _id: id })

        return res.json({ status: 'success' })
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router