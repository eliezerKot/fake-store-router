const prcont = require('../dl/controllers/prcont')

async function getAll() {
    const list = await prcont.read()
    console.log(list);
    return list
}

async function findById(id) {
    const user = await prcont.findbyid(id)
    console.log(user);
    return user
}
function validation(newData) {
    if (typeof(newData.title)  != 'string' )  throw `it's must be a string3`
  else if ( typeof( newData.description) != "string")  throw `it's must be a string2`
//   else if (typeof( newData.image != 'string'))  throw `it's must be a string1`
    else if (typeof(newData.price)  != 'number') throw `this section must be type number`
    else return newData
}

async function create(newobj) {
    validation(newobj)
    const newProduct = prcont.createobj(newobj)
    return newProduct
}

async function update(id, newData) {
    const product = await prcont.findbyid(id)
    if (!product) throw `this prudoct with this id: ${id} dosent exists`
    validation(newData)
    const updatedobj = await prcont.updateobj(id, newData)
    return updatedobj
}

async function delete1(id) {
    const product = await prcont.findbyid(id)
    if (!product) throw `this prudoct with this id: ${id} dosent exists`
    const deleted = await prcont.delete1(id)
    return deleted
}

module.exports = { getAll, create, update, delete1, findById }