// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "black";
      showAlert("Dark Mode has been enabled.", "success");
      document.title = "TextUtils-Home";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled.", "success");
      document.title = "TextUtils-Home";
    }
  };

  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Himanshi :)
    //     </a>
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Route path="/">
              <About></About>
            </Route> */}
        {/* <Routes>
            <Route
              path="/"
              element={
              */}
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          // toggleMode={toggleMode}
        />
        <About mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
