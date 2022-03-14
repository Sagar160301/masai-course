

const mongoose = require('mongoose')

const masterSavingSchema = new mongoose.Schema({

    masterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "master",
        required: true,
        unique: true
    },
    savingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "saving",
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true

    }
}, {
    timestamps: true
})

module.exports = mongoose.model("masterSaving", masterSavingSchema)