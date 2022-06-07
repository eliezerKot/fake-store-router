const
    express = require('express'),
    cors = require('cors'),
    app = express()
require('./db')
dotenv = require('dotenv').config()
PORT = process.env.PORT,
    app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

require('./router')(app)
app.listen(PORT, () => console.log(`server is runing on port : ${PORT}`))