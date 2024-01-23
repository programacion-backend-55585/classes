import { faker } from '@faker-js/faker'

export const generateUser = () => {

    const numOfProducts = faker.number.int({max: 10})
    const products = []

    for(let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        sex: faker.person.sex(),
        products
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        stock: faker.number.int({ max: 100 }),
        image: faker.image.urlLoremFlickr()
    }
}