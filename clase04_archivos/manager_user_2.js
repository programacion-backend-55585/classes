const fs = require('fs')

class ManagerUser {

    constructor(filename) {
        this.path = filename
        this.format = 'utf-8'
    }

    getUser = async () => {
        try {
            if( !fs.existsSync(this.path) ) return []
            
            const content = await fs.promises.readFile(this.path, this.format)
            const db = JSON.parse(content)

            return db
        } catch (e) {
            console.log('ERROR', e)

            return []   
        }
    }

    createUser = async (firstname, lastname, age, course) => {
        try {
            const users = await this.getUser()
            users.push({firstname, lastname, age, course})

            await fs.promises.writeFile(this.path, JSON.stringify(users))
            return users
        } catch (e) {
            console.log('ERROR', e)
            return []   
        }
    }

}

async function run() {
    const manager = new ManagerUser('./users.json')
    await manager.createUser('Ezequiel', 'Canan', 23, 'JS Backend')
    console.log( await manager.getUser())
}

run()