const express = require ('express')
//cors- crossite origin register resource
//frontend diffrent port and backend diffrent port
const cors = require ('cors')
//helmet - provides security by default all security feature are enbale

const helmet = require ('helmet')
// morgan - api logger for testing

const morgan = require('morgan')
const RunServer = require('./database/connection')

const userRoute = require('./routes/userRoute')
require('dotenv').config()
const productRoute= require('./routes/productRoutes')
const app = express()
const port = 3000

//midllewares
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1',productRoute)
app.use('/api/v1/user', userRoute)

RunServer()

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})