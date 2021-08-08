const mongoose = require('../connection/mongo')


const ProductSchema= new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    senha: {
        type: String,
        required: true
    },
    criadoEm:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('User', ProductSchema)

module.exports= Product
