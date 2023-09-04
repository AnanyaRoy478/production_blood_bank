const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, "Inventory type requires"],
        enum: ["in","out"]
    },
    bloodGroup: {
        type: String,
        required: [true, "blood group requires"],
        enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
    },
    quantity: {
        type: Number,
        required: [true, "Blood quantity requires"]
    },
    email:{
        type:String,
        required: [true, "Donar's Email requires"]
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "organisation requires"]
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
           return this.inventoryType === "out"
        }
    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
          return this.inventoryType === "in"
        }
    }
}, {
    timestamps: true
}, {
    versionKey: false
})

module.exports = mongoose.model("Inventory", inventorySchema)