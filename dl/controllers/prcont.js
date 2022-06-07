const path = require('path')
const prmodel = require('../models/prmodel'),
    
    mongoose = require('mongoose'),
    list = require('../../store.json')
require('../../db')


async function sendToDb(list) {
    const list1 = await prmodel.insertMany(list)
    return list1
}

async function findbyid(id){
    const obj = await prmodel.findById(id)
    console.log(obj);
    return obj
}

async function read(filter={}){
const list = await prmodel.find({...filter,isActive:true})
console.log(list);
return list
}

async function delete1(id){
    const deleted = await prmodel.findByIdAndUpdate(id,{isActive:false},{new:true})
    console.log(deleted);
    return deleted
}

async function createobj(obj){
    const newobj = await prmodel.create(obj)
    console.log(newobj);
    return newobj
}

async function updateobj(id,newData){
    const updatedobj = await prmodel.findByIdAndUpdate(id,newData,{new:true})
    console.log(updatedobj);
    return updatedobj
}

async function deleteobj(id){
const deletedobj = await prmodel.findByIdAndDelete(id)
console.log(deletedobj);
return deletedobj
}

module.exports={read,createobj,updateobj,deleteobj,findbyid,delete1}