const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 0 This is just testing purpose route
router.get('/',
    (req, res) => {
        res.send("Yes good going")
    })

// Route 1 This is to get all the notes from the user
router.get('/fetchnotes', fetchuser,
    async (req, res) => {
        try {
            // Now get all the notes from that user
            const allNotes = await Notes.find({ user: req.user.id });
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
    async (req, res) => {

        // Get the notes data from the req
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newNote = new Notes({
                title, description, tag, user: req.user.id
            })

            const savedNote = newNote.save();

            res.json({ newNote, "message": "wtf" });
        } catch (error) {
            console.error(error.message);
            res.status(500).json("Something went wrong while adding note")
        }
    }

)

router.put('/addnote/:id', fetchuser,
    async (req, res) => {
        try {


            // Get the values from body
            const { title, description, tag } = req.body;

            // Create a new note 
            const newNote = {};
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };

            // Get the existing note from id in the params if not valid id then return not found 
            let note = await Notes.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Note not found");
            }

            // Chcek if the user is correct for that note 
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not allowed to change");
            }

            // update the existing note 
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

            res.json({ note, message: "Updated the note" });
        } catch (error) {
            console.error(error.message);
            res.status(500).json("Something went wrong while updating note")
        }
    }
)


// Route 3 : This is to delete the already created note
router.delete('/deleteNote/:id', fetchuser,
    async (req, res) => {

        try {
            //get the Id of the note
            let note = await Notes.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Invalid note id");
            }
            // Check if the user id correct or not
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Access denied for you ",);
            }

            // If correct then delete
            const deleteNote = await Notes.findByIdAndDelete(req.params.id);

            res.json({ Message: "note deleted successfully", deleteNote });
        } catch (error) {
            console.error(error.message);
            res.status(500).json("Something went wrong while deleting note")
        }
    }
)

module.exports = router;