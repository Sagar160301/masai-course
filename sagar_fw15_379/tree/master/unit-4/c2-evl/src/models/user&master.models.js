

const mongoose = require('mongoose')

const userMasterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true
    },
    masterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "master",
        required: true,
        unique: true
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model("userMaster", userMasterSchema)