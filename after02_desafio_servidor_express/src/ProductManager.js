import fs from 'fs';

class ProductManager {

    getProducts = async () => {
        return fs.promises.readFile('./products.json', 'utf-8')
            .then(r => JSON.parse(r))
    }

}

export default ProductManager