import React, {Component} from 'react';
import {Link} from  'react-router-dom';



export default class Navbarframe extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Excertracker</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Tickets</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/tickets" className="nav-link">Create Tickets</Link>
                    </li>                    
                    <li className="navbar-item">
                        <Link to="/users" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}