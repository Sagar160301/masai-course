

const mongoose = require('mongoose')


const savingSchema = new mongoose.Schema({
    account_number: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model("saving", savingSchema)