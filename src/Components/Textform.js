import React, { useState } from "react";

export default function Textform(props) {
  const handleupClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted into Uppercase", "success");
  };
  const handleloClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText("You have clicked on handleloClick");
    setText(newText);
    props.showAlert("Converted into Lowercase", "success");
  };
  const handleclClick = () => {
    console.log("Cleartext was clicked" + text);
    let newText = " ";
    setText("You have clicked on handleclClick");
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };

  const handleonChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here2");
  // const [text, setText] = useState("Enter text here2");
  // console.log(useState("Enter text here2"));
  // setText("text here");
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={handleupClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={handleloClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={handleclClick}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summmary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
