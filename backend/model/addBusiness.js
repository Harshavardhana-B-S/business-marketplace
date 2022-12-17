const mongoose = require("mongoose");

const addBussiness = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter product description"]
    },
    description:{
        type: String,
        required: [true, "Please Enter Product price"],
        maxLength: [250, "Price cannot exceed 250 characters"]
    },
    address:{
        type: String,
        required: [true, "Please Enter Product price"],
        maxLength: [250, "Price cannot exceed 250 characters"]
    },

    website:{
        type: String,
        required: [true, "Please Enter Product price"],
        maxLength: [250, "Price cannot exceed 250 characters"]
    },

    phoneNumber:{
        type: Number,
        required: [true, "Please Enter Product price"],
        maxLength: [250, "Price cannot exceed 250 characters"]
    }
})

module.exports=mongoose.model("addBusiness",addBussiness);