import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbarframe from "./components/navbar.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbarframe />
        <br/>
        <Route path="/" exact component={ExerciseList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path ="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}/>
      </div>

    </Router>
  );
}

export default App;
