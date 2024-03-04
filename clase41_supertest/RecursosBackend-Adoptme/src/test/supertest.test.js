import chai from 'chai'
import supertest from 'supertest'
import { faker } from '@faker-js/faker'

const expect = chai.expect
const requester = supertest('http://127.0.0.1:8080')

describe('Testing Adopt Me', () => {
    describe('Test de Mascotas', () => {

        it('El endpoint POST /api/pets debera registrar una mascota', async () => {
            const petMock = {
                name: 'Firulais',
                specie: 'dog',
                birthDate: '10-10-2020'
            }

            const response = await requester.post('/api/pets').send(petMock)
            const { status, ok, _body } = response

            expect(_body.payload).to.have.property('_id')
        })

        it('El endpoint /api/pets NO deberia crear una mascota con datos vacios', async () => {
            const petMock = {}

            const response = await requester.post('/api/pets').send(petMock)
            const { status, ok, _body } = response

            expect(ok).to.be.eq(false)
        })
    })
})

describe('Registro, Login & Current', () => {
    let cookie;
    const mockUser = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    it('Debe registrar un usuario', async () => {
        const { _body } = await requester.post('/api/sessions/register').send(mockUser)
        expect(_body.payload).to.be.ok
    })

    it('Debe loguear un user y DEVOLVER UNA COOKIE', async() => {

        const result = await requester.post('/api/sessions/login').send({
            email: mockUser.email,
            password: mockUser.password
        })
        expect(result.ok).to.be.ok

        const cookieResult = result.headers['set-cookie'][0]
        cookie = {
            name: cookieResult.split('=')[0],
            value: cookieResult.split('=')[1].split(';')[0]
        }

        expect(cookie.name).to.be.ok.and.eql('coderCookie')
        expect(cookie.value).to.be.ok
    })

    it('Consumir /current con cookie', async () => {
        const { _body } = await requester
            .get('/api/sessions/current')
            .set('Cookie', [`${cookie.name}=${cookie.value}`])
        
        expect(_body.payload.email).to.be.eql(mockUser.email)

    })
})

describe('Test upload file', async () => {

    it('Debe subir un archivo al crear mascotas', async () => {
        const petMock = {
            name: 'messi',
            specie: 'god',
            birthDate: '10-10-2000'
        }

        const result = await requester.post('/api/pets/withimage')
            .field('name', petMock.name)
            .field('specie', petMock.specie)
            .field('birthDate', petMock.birthDate)
            .attach('image', './src/test/messi.jpg')

        expect(result.status).to.be.eql(200)
        expect(result._body.payload).to.have.property('_id')
        expect(result._body.payload.image).to.be.ok

    })

})