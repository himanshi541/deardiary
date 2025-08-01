import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "687f9b58308b757a865a8cb8",
      user: "6849467a77bac63796c054df",
      title: "Hello world2",
      description: "hello world please dont show error ",
      tag: "personal",
      date: "2025-07-22T14:08:24.256Z",
      __v: 0,
    },
    {
      _id: "687f9b58308b757a865a8cb8",
      user: "6849467a77bac63796c054df",
      title: "Hello world2",
      description: "hello world please dont show error ",
      tag: "personal",
      date: "2025-07-22T14:08:24.256Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "687f9b58308b757a865a8cb8",
      user: "6849467a77bac63796c054df",
      title: title,
      description: description,
      tag: tag,
      date: "2025-07-22T14:08:24.256Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };
  //Del a Node
  const delNode = (id) => {
    console.log("Deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a Note
  const editNode = (id, title, description, tag) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, delNode, editNode }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
