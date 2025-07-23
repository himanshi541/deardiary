const express = require("express");
const { body, validationResult } = require("express-validator");
const notes = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../modals/Note");
const router = require("./auth");

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
//Route 3 to update an existing note for the logged in user using put
notes.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    //create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("404,NOT FOUND :(");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed *__*");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4 to delete an existing note for the logged in user using delete

notes.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // const { title, description, tag } = req.body;

    //find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("404,NOT FOUND :(");
    }
    //Allow deletion only if the user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed *__*");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = notes;
