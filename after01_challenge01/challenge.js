

class ProductManager {

    #name
    constructor() {
        this.products = []
        this.#name = 'Nombre del manager'
    }

    addProduct = (objeto) => {
        const { title, description, code } = objeto
        console.log('Intentando agregar el producto ', code)

        // Valida que title sea obligatorio
        // return cierra la funcion addProduct
        if (!title || !description) return 
        
        // Valida que el code no este repetido
        const funcionQueValidaElCode = (productItem) => {
            console.log(`Validanto que el ${code} sea diferente a este producto (${productItem.code})`)
            return productItem.code === code
        }

        if (this.products.some(funcionQueValidaElCode)) { 
            console.log('Encontro un code en la DB. Detener funcion')
            return
        }

        this.products.push({
            title,
            description,
            code
        })
        console.log(`Agrego el producto `, code, '!!!!!\n')
    }

    getProductByID = (code) => {
        console.log(this.#name)
        const product = this.products.find(p => p.code === code)

        if(product) return product
        else console.error('Not found')
    }

}

const productManager = new ProductManager()

const productToAdd = {
    title: 'Primer',
    name: 'asdasd',
    description: 'asdasd',
    code: '1001'
}
productManager.addProduct(productToAdd)
productManager.addProduct({
    title: 'Segundo',
    description: 'Noths ',
    code: '1002'
})
productManager.addProduct({
    title: 'Tercero',
    description: 'Noths ',
    code: '1002'
})

productManager.getProductByID('1003')

productManager.products
// productManager.#name Esto no funciona !

console.log(productManager.products)