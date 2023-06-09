const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


// This is route 1 for creating a new user and validating whether the details are allowed
router.post('/createuser',
    [
        // username must be an email
        body('email').isEmail(),
        // password must be at least 5 chars long
        body('name', 'Enter a valid name').isLength({ min: 5 }),
        body('password', 'Enter a valid password').isLength({ min: 1 })
    ],

    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try{
        // Check if there is any user already exist
        let user = await User.findOne({ email: req.body.email });
        if (user){
            return res.status(400).json(
                {
                    "error" : `${req.body.email} already exists` 
                })
        }

        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        const JWT_secret = "Amisha";
        const data = {
            user:{
                id : user.id
            }
        }

        var token = jwt.sign(data, JWT_secret);


        res.json({"Details": user, token});
        }catch(err){
            res.status(500).json({"error" : err, "message" : err.message});
        }
    }
)

// This is the route 2 for creating tokens for every login session 
router.post('/loginuser',
    [
        // username must be an email
        body('email', 'Enter correct email').isEmail(),
        // password must not be empty
        body('password', 'Password can not be empty').exists()
    ],

    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        try{
        // Check if there is any user already exist
        let user = await User.findOne({email});
        if (!user){
            return res.status(400).json(
                {
                    "error" : `${req.body.email} does not exists` 
                })
        }

        var verified = await bcrypt.compare(password, user.password);

        if (!verified){
            return res.status(400).json(
                {
                    "error" : `${req.body.password} is not correct` 
                })
        }

        const JWT_secret = "Amisha";
        const data = {
            user:{
                id : user.id
            }
        }

        var token = jwt.sign(data, JWT_secret);


        res.json({"greet": `Welcome Mr. ${user.name}!`,"Details": user, token});
        }catch(err){
            res.status(500).json({"error" : err, "message" : "something went wrong in login"});
        }
    }
)

// This is route 3 for fetching the user data from the generated token
router.post('/getuser', fetchuser,  //fetchuser is middlewar here 
    async(req, res)=>{
        try {
            const userDetails = await User.findById(req.user.id).select("-password"); // Exclude password
            res.status(200).json(userDetails);
        } catch(err){
            res.status(500).json({"error" : err, "message" : "something went wrong in login"});
        }
})

module.exports = router;
