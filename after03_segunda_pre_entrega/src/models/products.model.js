import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    thumbnail: String
})

productSchema.plugin(mongoosePaginate)
const productModel = mongoose.model('products', productSchema)

export default productModel