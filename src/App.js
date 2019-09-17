import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components.navbar.components";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

      </div>

    </Router>
  );
}

export default App;
