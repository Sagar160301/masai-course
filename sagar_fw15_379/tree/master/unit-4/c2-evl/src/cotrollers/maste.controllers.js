

const express = require('express')

const app = express()
const Master = require("../models/user&master.models")

const User = require("../models/user.models")


app.get("/master", async (req, res) => {
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