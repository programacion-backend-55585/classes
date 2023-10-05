const crypto = require('crypto')
const fs = require('fs')

const filename = './db.json'

class UserManager {
    getUsers = async () => {
        try{
            const DB = await fs.promises.readFile(filename, 'utf-8')
            
            return JSON.parse(DB)
        } catch(e) {
            return []
        }
    }

    insertUser = async (user) => {
        const DB = await this.getUsers()
        user.id = DB.length + 1

        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

        DB.push(user)
        await fs.promises.writeFile(filename, JSON.stringify(DB))
    }

    validateUser = async (username, password) => {
        const DB = await this.getUsers()
        const user = DB.find(u => u.username == username)

        if(!user) {
            console.log('User not found')
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

        if(newHash == user.password) console.log('Logged!')
        else console.log('Invalid pass')
    }
}

async function run() {
    const manager = new UserManager()
    await manager.insertUser({
        name: 'Simon', lastname: 'Sola', username: 'simon', password: '123456'
    })
    await manager.insertUser({
        name: 'Andrea', lastname: 'Berardi', username: 'andrea', password: 'secret'
    })
    
    console.log( await manager.getUsers() )
    
    manager.validateUser('andrea', 'secret')
}

run()
