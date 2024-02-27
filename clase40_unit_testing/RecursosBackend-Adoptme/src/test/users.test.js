import UserDAO from '../dao/Users.dao.js'
import mongoose from 'mongoose'
import Assert from 'assert'

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase40_55_test' })

const assert = Assert.strict


describe('Testing Users Dao', () => {

    before(async function(done) {
        mongoose.connection.collections.users.drop()
        done()
    })

    after(function() {
        console.log('Done!!')
    })

    it('El dao debe poder obtener los usuarios', async() => {
        const usersDao = new UserDAO()
        const result = await usersDao.get()

        assert.strictEqual(Array.isArray(result), true)
    })

    it('El dao debe poder crear usuarios', async() => {
        let mockUser = {
            first_name: 'Bruno',
            last_name: 'Perez',
            email: 'bruno@meta.com',
            password: 'secret'
        }

        const usersDao = new UserDAO()
        const result = await usersDao.save(mockUser)

        assert.deepStrictEqual(result.pets, [])
    })

    it('El dao debe poder buscar por email', async() => {
        let mockUser = {
            first_name: 'Mario',
            last_name: 'Aguilar',
            email: 'mario@huge.com',
            password: '123456'
        }

        const usersDao = new UserDAO()
        const result = await usersDao.save(mockUser)

        const user = await usersDao.getBy({email: 'mario@huge.com'})

        assert.strictEqual(typeof(user), 'object')
        assert.strictEqual(user.first_name, 'Mario')
    })

})

