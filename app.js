const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = express.Router({});

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())


mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("database connected")
})

app.listen(PORT, () =>{
    console.log('server is up and running at', PORT);
});