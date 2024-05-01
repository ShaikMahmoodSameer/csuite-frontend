import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";

function App() {

  return (
    <div className="App allBg">
      <Router>
        <Routes>
          <Route path="/" element={<Home auth={auth} userId={userId} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
