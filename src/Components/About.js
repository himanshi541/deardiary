import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "grey",
  // });
  // const [btntext, setBtnText] = useState("enable light mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "grey",
  //       backgroundColor: "white",
  //       // border: "2px solid white",
  //     });
  //     // props.showAlert("This Button is Disabled", "danger");
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "grey",
  //       border: "1px solid white",
  //     });
  //     // props.showAlert("This Button is Disabled", "success");
  //     setBtnText("Enable Light Mode");
  //   }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Anaylze your text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
              // style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              //   color: props.mode === "dark" ? "white" : "black",
              // }}
            >
              TextUtils gives you a way to analyze your text quickly and
              efficiently
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
              // style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              //   color: props.mode === "dark" ? "white" : "black",
              // }}
            >
              Free to use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count and word count statistics for a given text. Text
              Utils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
              // style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              //   color: props.mode === "dark" ? "white" : "black",
              // }}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as
              Chrome,Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button> */}
      </div>
    </div>
  );
}
