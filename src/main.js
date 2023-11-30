require("dotenv").config()
const express = require('express')
const router = require("./routes")
const PORT = 8001

const app = express()
app.use(express.json())

app.use(express.static('public'));


app.use('/api/teams', router);


app.listen(PORT, function(){
    console.log("App is listening on port", PORT)
})



