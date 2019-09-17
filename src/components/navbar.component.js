import React, {Component} from 'react';
import {Link} from  'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Ticket Log</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/tickets"  className="nav-link" href="#">Create Log</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/users" className="nav-link" href="#">Create user</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}