const express= require('express');
const {createContact, getAllContact} = require('../controller/contactController');

const router=express.Router();


// router.route("/products").get(getAllProducts);

router.route("/contacts").post(createContact);

router.route("/contact").get(getAllContact);

// router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports=router;