

const express = require('express')

const app = express()
const Master = require("../models/user&master.models")

const User = require("../models/user.models")


app.get("/", async (req, res) => {
    try {
        let masterAccounts = await Master.find({}).populate({
            path: "userId",
            select: { middleName: 0 }
        }).lean().exec()
        res.send(masterAccounts)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})
app.get("/;id", async (req, res) => {
    try {
        let masterAccounts = await Master.findById(req.params.findById).populate({
            path: "userId",
            select: ["account_number", "balance"]
        }).lean().exec()
        res.send(masterAccounts)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

module.exports = app