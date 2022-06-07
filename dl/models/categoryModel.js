const mongoose = require('mongoose')

const categoreySchema= new mongoose.Schema({
    name:{type:String,required:true}
})
const categoryModel = mongoose.model('category',categoreySchema)

module.exports=categoryModel