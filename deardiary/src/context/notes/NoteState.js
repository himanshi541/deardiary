import react, { use, useState } from "react";
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
  const [notes, setnotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
