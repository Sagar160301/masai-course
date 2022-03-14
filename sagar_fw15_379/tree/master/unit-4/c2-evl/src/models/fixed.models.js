

const mongoose = require('mongoose')

const fixedSchema = new mongoose.Schema({
    account_number: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true }
}, {
    timestamps: true
})


module.exports = mongoose.model("fixed", fixedSchema)