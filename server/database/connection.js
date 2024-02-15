const mongoose = require('mongoose')

//create functon to connect to mongoodb from express

function RunServer(){
    try {
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log('Mongo database connected')
    } catch (error) {
        console.log(error.message)
    }
}

//export the runserver

module.exports = RunServer