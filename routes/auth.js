const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/',
    [
        // username must be an email
        body('email').isEmail(),
        // password must be at least 5 chars long
        body('name', 'Enter a valid name').isLength({ min: 5 }),
        body('password', 'Enter a valid password').isLength({ min: 1 })
    ],

    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
            .then(user => res.json(user))
            .catch(err => {
                res.json(
                    {
                        error: err,
                        message: "Please enter different email address"
                    }
                )
            })
    }
)

module.exports = router;