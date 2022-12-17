const Contact =require("../model/contactModel");

//Create Contact --- Admin
exports.createContact=async(req,res,next)=>{
    const contact=await Contact.create(req.body);

    res.status(201).json({
        success:true,
        contact
    })
}



