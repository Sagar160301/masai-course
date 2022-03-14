
const express = require('express')

const app = express()
const Fixed = require("../models/fixed.models")

app.post("/", async (req, res) => {
    try {
        let account = await Fixed.create(req.body)
        res.send(account)
    } catch (err) {
        res.send(err.message)
    }
})

app.delete("/:id", async (req, res) => {
    try {
        let account = await Fixed.findByIdAndDelete(req.params.id)
        account.balance = ((acc.balance) * 2 / 1000)
        res.send(account)
    }
    catch (err) {
        res.send(err.message)
    }
})


module.exports = app