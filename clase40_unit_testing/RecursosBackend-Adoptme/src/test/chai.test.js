import UserDAO from '../dao/Users.dao.js'
import mongoose from 'mongoose';
import Assert from 'assert';
import { expect } from 'chai';

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { dbName: 'clase40_55_test' })

// Modulo nativo de Node para validar los test
const assert = Assert.strict


describe('Testing Users Dao', () => {

    before(function (done) {
        mongoose.connection.collections.users.drop()

        this.timeout(5000)
        done()
    })

    after(function (done) {
        mongoose.connection.collections.users.drop()

        console.log('Done!!')
        done()
    })

    describe('Users', () => {


        it('El dao debe poder obtener los usuarios', async () => {
            const usersDao = new UserDAO()
            const result = await usersDao.get({})

            console.log({ result })

            assert.strictEqual(Array.isArray(result), true)

            expect(Array.isArray(result)).to.be.equal(true)
            expect(result).to.be.deep.eq([])
        })

        it('El dao debe poder crear usuarios', async () => {
            let mockUser = {
                first_name: 'Bruno',
                last_name: 'Perez',
                email: 'bruno@meta.com',
                password: 'secret'
            }

            const usersDao = new UserDAO()
            const result = await usersDao.save(mockUser)

            assert.deepStrictEqual(result.pets, [])

            expect(result.pets).to.be.deep.equal([])
        })

        it('El dao debe poder buscar por email', async () => {
            let mockUser = {
                first_name: 'Mario',
                last_name: 'Aguilar',
                email: 'mario@huge.com',
                password: '123456'
            }

            const usersDao = new UserDAO()
            const result = await usersDao.save(mockUser)

            const user = await usersDao.getBy({ email: 'mario@huge.com' })

            assert.strictEqual(typeof (user), 'object')
            assert.strictEqual(user.first_name, 'Mario')

            expect(typeof (user)).to.be.eq('object')
            expect(user.first_name).to.be.eq('Mario')
        })
    })


})

