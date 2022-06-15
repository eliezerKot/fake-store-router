const categoryModel = require('../models/categoryModel'),
mongoose = require('mongoose')
require('../../db')
list = require('../../store.json')
    async function sendToDb(list){
        const list1 = await categoryModel.insertMany(list)
        return list1
        }
        // sendToDb(list)
        

    async function read() {
        const list = await categoryModel.find()
        // console.log(list);
        return list
    }
// read()
async function createobj(obj){
    const newobj = await categoryModel.create(obj)
    // console.log(newobj);
    return newobj
}
// createobj({
// name:"bla bla"
// })

async function updateCat(obj,newUpdate){
const updatedThing = await categoryModel.findByIdAndUpdate(obj,newUpdate,{new:true})
// console.log(updatedThing);
return updatedThing
}
// updateCat("62989c8d95f9f64aad399e7f",{name:'djdhdj'})

async function categorey(id){
const deletedobj = await categoryModel.findByIdAndDelete(id)
// console.log(deletedobj);
return deletedobj
}
// categorey("62989c8d95f9f64aad399e7f")

module.exports= {read}