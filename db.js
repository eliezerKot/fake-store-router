require('dotenv').config()
const mongoose = require('mongoose')
const CONNECTION_STRING = process.env.CONNECTION_STRING

async function connect() {
    try {
        await mongoose.connect(CONNECTION_STRING,
            { useNewUrlParser: true },
            (error) => {
                if (error) { console.log("error1:", error) }
                console.log(mongoose.connection.readyState)
            })
    } catch (error) {
        console.log("error2:", error, mongoose.connection.readyState)
    }

}
connect()
module.exports = { connect }