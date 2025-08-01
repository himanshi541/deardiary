import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { delNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => delNote(note._id)}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-3"
            onClick={() => updateNote(note)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
