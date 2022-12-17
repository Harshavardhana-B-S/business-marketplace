const Contact =require("../model/contactModel");
const addBusiness= require("../model/addBusiness")

//Create Contact --- Admin
exports.createContact=async(req,res,next)=>{
    const contact=await Contact.create(req.body);

    res.status(201).json({
        success:true,
        contact
    })
}

//Get All product details
exports.getAllContact= async(req,res)=>{
    
    const contact= await Contact.find();

    res.status(200).json({
        success:true,
        contact
    });
}

// Get addBussiness
exports.createBusiness= async(req,res,next)=>{
   const addBuss= await  addBusiness.create(req.body);
   res.status(201).json({
    success:true,
    addBuss
})
}





