const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post( '/', 

    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 1 }),

    (req, res)=>{
    // This is how we can send json responce 
    // obj = {
    //     name : "Rushikesh",
    //     age : 24
    // }
    // res.json(obj)
    
    // This is how we save the input 
    const user = User(req.body);
    user.save();
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;