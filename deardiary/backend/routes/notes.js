const express = require("express");
const { body, validationResult } = require("express-validator");
const notes = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../modals/Note");

//Route 1 to fetch all the notes of the logged in user
notes.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const userNotes = await Note.find({ user: req.user.id });
    res.json(userNotes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 to add a new note for the logged in user using post
notes.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description at least 2 words").isLength({
      min: 2,
    }),
  ],

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // If there are errors, return Bad request and the errors

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = notes;
