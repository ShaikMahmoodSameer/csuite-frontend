import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "red" }}>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat velit! Consequuntur quaerat fugit aliquam odit, temporibus rerum est repellendus pariatur, dolore, consectetur maxime error.</p>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "red" }}>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat velit! Consequuntur quaerat fugit aliquam odit, temporibus rerum est repellendus pariatur, dolore, consectetur maxime error.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
