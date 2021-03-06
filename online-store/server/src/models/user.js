const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    phone : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: false
    },
    cart: [{
        quantity: Number,
        _id: Schema.ObjectId
    }]
})


module.exports = mongoose.model('User', schema)
