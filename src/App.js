// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, { useState } from "react";
// import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  RouterProvider,
} from "react-router-dom";

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
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.toggle("bg-" + cls);
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
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" my-3>
          {/* <Route path="/">
              element{<About></About>}
            </Route> */}
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading=" TextUtils-Convert your text here"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About></About>} mode={mode}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
