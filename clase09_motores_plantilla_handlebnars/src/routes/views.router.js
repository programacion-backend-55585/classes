import { Router } from 'express'

const router = Router()

const foods = [
    {name: 'Banana', price: 10 },
    {name: 'Vinos', price: 150 },
    {name: 'Hot Dogs', price: 100 },
    {name: 'Hamburgers', price: 110 },
    {name: 'Beers', price: 75 },
]

router.get('/', (req, res) => {
    const user = {
        name: 'Edoardu Ernesto',
        isAdmin: true
    }

    res.render('index', {
        user,
        foods,
        style: 'index.css',
        title: 'My Page for Edoardu'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {})
})

export default router