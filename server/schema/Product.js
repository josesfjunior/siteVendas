const mongoose = require('../connection/mongo')


const ProductSchema= new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        unique: true,
        required: true,
    },
    preco: {
        type: String,
        required: true
    },
    criadoEm:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports= Product
