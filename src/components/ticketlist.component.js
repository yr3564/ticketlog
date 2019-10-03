import React, {Component} from 'react';
import axios from  'axios';

const Ticket = props=> (
    <tr>
        <td>{props.ticket.username}</td>
        <td>{props.ticket.ticketnumber}</td>
        <td>{props.ticket.description}</td>
        <td>{props.ticket.siteNumber}</td>
        <td>{props.ticket.date.substring(0,10)}</td>
    </tr>
)
export default class TicketList extends Component{
    constructor(props){
        super(props);
            this.state={tickets:[]};
                    
    }
    componentDidMount(){
        axios.get('http://localhost:5000/tickets/')
        .then( response=>{
            this.setState({tickets:response.data})
        })
        .catch((error)=>{console.log("The following error occur"+ error)})        
    }

    ticketlistmap(){
        return this.state.tickets.map(currenticket=>{
            return <Ticket ticket={currenticket} key={currenticket._id}/>
        })
    }
    render(){
        return(
            <div>
                <h3>Ticket List</h3>
                <table className="table">
                    <thead className="thead-;ight">
                        <tr className>
                            <th>Username</th>
                            <th>Ticket</th>
                            <th>Description</th>
                            <th>Site</th>
                            <th>Date</th>
                            <tbody>
                                {this.ticketlistmap()}
                            </tbody>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}