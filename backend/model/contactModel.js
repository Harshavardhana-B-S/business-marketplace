const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter product description"]
    },
    message:{
        type: String,
        required: [true, "Please Enter Product price"],
        maxLength: [250, "Price cannot exceed 250 characters"]
    }
})

module.exports=mongoose.model("Contact",contactSchema);