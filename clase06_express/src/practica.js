import express from 'express'

const app = express()

const DB = [
    {id: '1', name: 'Andrea', lastname: 'Berardi', gender: 'F'},
    {id: '2', name: 'Matias', lastname: 'Herrero', gender: 'M'},
    {id: '3', name: 'Lily', lastname: 'Jang', gender: 'F'},
    {id: '4', name: 'Ruben', lastname: 'Gianelli', gender: 'M'},
]

app.get('/', (req, res) => {
    let gender = req.query.gender

    if(gender) {
        gender = gender.toUpperCase()
        if(gender == 'M' || gender == 'F') {
            const userFiltered = DB.filter(u => u.gender === gender)
            return res.send({users: userFiltered})
        }
    }

    return res.send( { users: DB } )
})
app.get('/:iduser', (req, res) => {
    const { iduser } = req.params

    const user = DB.find(u => u.id === iduser)

    if(!user) {
        console.log('No encontro el user')
        return res.send({error: 'User not found'})
    }
    
    console.log('Devolviendo el user')
    return res.send(user)
})


app.listen(8080, () => console.log('Listening.. '))