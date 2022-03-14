

const express = require('express')

const app = express()

const Saving = require('../models/saving.models')


app.post("/", async (req, res) => {
    try {
        let account = await Saving.create(req.body)
        res.send(account)
    }
    catch (err) {
        res.send(err.message)
    }
})

module.exports = app