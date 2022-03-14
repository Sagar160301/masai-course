

const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.cugin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect