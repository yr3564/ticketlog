import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbarframe from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import TicketList from "./components/ticketlist.component";
import CreateTicket from "./components/create-tickets.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbarframe />
        <br/>
        <Route exact path="/" component={TicketList}/>
        <Route exact path="/users" component={CreateUser}/>
        <Route exact path ="/tickets" component={CreateTicket}/>
      </div>

    </Router>
  );
}

export default App;
