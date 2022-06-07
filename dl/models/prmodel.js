const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image:{type:String,required:true},
    category: { type:mongoose.Types.ObjectId,ref:'categories', required: true },
    rating: {
        rate: Number,
        count: Number
    },
    isActive:{type:Boolean, default:true}
})
const productModel = mongoose.model('products',productSchema)
module.exports=productModel