import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTQ2N2E3N2JhYzYzNzk2YzA1NGRmIn0sImlhdCI6MTc0OTYzMjY3Mn0.i6N68q7tXQepLU5eN48ijnfN-G3eZPInDQDgo_FIhnU",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTQ2N2E3N2JhYzYzNzk2YzA1NGRmIn0sImlhdCI6MTc0OTYzMjY3Mn0.i6N68q7tXQepLU5eN48ijnfN-G3eZPInDQDgo_FIhnU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const newNote = await response.json();
    // setNotes(notes.concat(newNote));
    const json = await response.json();
    console.log(json);

    console.log("Adding a new note");
    const note = {
      _id: "687f9b58308b757a865a8cb8",
      user: "6849467a77bac63796c054df",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const delNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTQ2N2E3N2JhYzYzNzk2YzA1NGRmIn0sImlhdCI6MTc0OTYzMjY3Mn0.i6N68q7tXQepLU5eN48ijnfN-G3eZPInDQDgo_FIhnU",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id ", id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTQ2N2E3N2JhYzYzNzk2YzA1NGRmIn0sImlhdCI6MTc0OTYzMjY3Mn0.i6N68q7tXQepLU5eN48ijnfN-G3eZPInDQDgo_FIhnU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
      break;
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, delNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
