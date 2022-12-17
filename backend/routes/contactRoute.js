const express= require('express');
const {createContact} = require('../controller/contactController');

const router=express.Router();


// router.route("/products").get(getAllProducts);

router.route("/contact/new").post(createContact);

// router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports=router;