

const mongoose = require('mongoose')

const masterfixedSchema = new mongoose.Schema({
    masterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "master",
        required: true,
        unique: true
    },
    fixedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fixed",
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true

    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("masterFixed", masterfixedSchema)