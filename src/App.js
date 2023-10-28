import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/NavHeader.jsx/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/NavHeader.jsx/AboutMe";
import Contacts from "./components/NavHeader.jsx/Contacts";
import Projects from "./components/NavHeader.jsx/Projects";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={"Home"} />
        </Routes>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
