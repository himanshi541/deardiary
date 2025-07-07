import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar color="#f11946" height={4} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="general"
              ></News>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="business"
              ></News>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="entertainment"
              ></News>
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="health"
              ></News>
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="science"
              ></News>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="sports"
              ></News>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="technology"
              ></News>
            }
          />
          <Route
            exact
            path="/search"
            element={
              <News
                setProgress={setProgress}
                ApiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="general"
                // searchQuery={searchQuery}
              ></News>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
