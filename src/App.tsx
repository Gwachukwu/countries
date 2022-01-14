import React, { useState } from "react";
import "./scss/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import * as BsIcons from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark-mode"}`}>
        <nav className={`navbar ${darkMode && "navbar-dark"}`}>
          <header>
            <h1>Where in the world?</h1>
          </header>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="navbar_mode-switch"
          >
            <h4>
              {darkMode ? (
                <span>
                  <BsIcons.BsSun className="mode-icon" />
                  Light Mode
                </span>
              ) : (
                <span>
                  <BsIcons.BsMoon className="mode-icon" /> Dark Mode
                </span>
              )}
            </h4>
          </div>
        </nav>
        <Routes>
          <Route path="/*" element={<Home darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
