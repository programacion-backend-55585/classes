const fs = require('fs')

class ManagerUser {

    constructor(filename) {
        this.path = filename
        this.format = 'utf-8'
    }

    getUser = async () => {
        if( !fs.existsSync(this.path) ) return []

        return fs.promises.readFile(this.path, this.format)
            .then( content => JSON.parse(content) )
            .catch( e => {
                console.log('ERROR', e)
                return []
            })
    }

    createUser = async (firstname, lastname, age, course) => {
        return this.getUser()
            .then(users => {
                users.push({firstname, lastname, age, course})
                return users
            })
            .then(users => fs.promises.writeFile(this.path, JSON.stringify(users)))
            .catch( e => {
                console.log('ERROR', e)
                return []
            })
    }

}

async function run() {
    const manager = new ManagerUser('./users.json')
    await manager.createUser('Ezequiel', 'Canan', 23, 'JS Backend')
    console.log( await manager.getUser())
}

run()