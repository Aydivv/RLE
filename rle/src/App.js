import "./css/App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Encode from "./Encode.js";
import Decode from "./Decode.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="encode" element={[<Header />, <Encode />]} />
        <Route path="/" element={[<Header />, <Encode />]} />
        <Route path="decode" element={[<Header />, <Decode />]} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
