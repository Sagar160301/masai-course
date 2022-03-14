


const express = require('express')
const app = express()

app.use(express.json())

const connect = require('../config/db')

app.listen(5901, async () => {
    try {
        await connect()
    }
    catch (err) {
        console.log({ message: err.message })
    }
})