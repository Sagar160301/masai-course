


const express = require('express')
const app = express()

app.use(express.json())


const fixedController = require('./cotrollers/fixed.controllers')
const masterController = require("./cotrollers/maste.controllers")
const savingController = require("./cotrollers/saving.controllers")

const connect = require('../config/db')


app.use("/fixed", fixedController)
app.use("/master", masterController)
app.use("/saving", savingController)

app.listen(5901, async () => {
    try {
        await connect()
    }
    catch (err) {
        console.log({ message: err.message })
    }
})