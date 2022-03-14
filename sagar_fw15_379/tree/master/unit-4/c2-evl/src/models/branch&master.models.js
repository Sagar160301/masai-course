const mongoose = require('mongoose')


const branchMasterSchema = new mongoose.Schema({
    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brach",
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
    timestamps: true

})

module.exports = mongoose.model("banchMaster", branchMasterSchema)