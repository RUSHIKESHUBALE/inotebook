const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 0 This is just testing purpose route
router.get('/',  
    (req, res)=>{
        res.send("Yes good going")
})

// Route 1 This is to get all the notes from the user
router.get('/fetchnotes', fetchuser,
    async (req, res)=>{
        try {
        // Now get all the notes from that user
        const allNotes = await Notes.find({user : req.user.id});
        res.json(allNotes);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Something wrong in fetching the notes")
        }
})

// Route 2 This is to create new notes 
router.post('/addnote', fetchuser,
    [
        // title must not be empty
        body('title', "Add some title").exists(),
        // password must be at least 5 chars long
        body('description', 'Enter some description').isLength({ min: 5 })
    ],
    async (req, res)=>{
        
        // Get the notes data from the req
        const {title, description, tag} = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try{
        const newNote = new Notes({
            title, description, tag, user : req.user.id
        })

        const savedNote = newNote.save();

        res.json({newNote, "message" : "wtf"});
        }catch(error){
            console.error(error.message);
            res.status(500).json("Something went wrong while adding note")
        }
    }

)

module.exports = router;