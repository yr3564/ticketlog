import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

/*Logic of the code
 1 set the state of the component based on the schema
 2 create the change methods for the every state 
 3 Bind all change methods to (this)*/

export default class CreateTicket extends Component{
    constructor(props){
        super(props);
        //set This to each change methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTicketNumber = this.onChangeTicketNumber.bind(this);
        this.onChangeSiteNumber= this.onChangeSiteNumber.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username:'',
            ticketnumber:0,
            siteNumber:'',
            description:'',
            date:new Date(),
            user:[]
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username:'test-user'
        })
    }
        // setting change state methods for all the parameters
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangeTicketNumber(e){
        this.setState({
            ticketnumber:e.target.value
        })
    }
    onChangeSiteNumber(e){
        this.setState({
            siteNumber:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
        date:date
        })
    }
    onSubmit(e){
        e.preventDefault();
        const ticket ={
            username:this.state.username,
            ticketnumber:this.state.ticketnumber,
            siteNumber:this.state.siteNumber,
            description:this.state.description,
            date:this.state.date
        }
        axios.post('http://localhost:5000/tickets/add',ticket)
            .then(res=>console.log(res.data));
        console.log(ticket);
        this.setState({
            username:'',
            ticketnumber:0,
            siteNumber:'',
            description:'',
            date:new Date(),
        })
        //send user to home loaction after form submit
        window.location='/';
    }
    render(){
        return(
            <div>
                <h3> Create Ticket</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <label>Ticket Number: </label>
                        <input type="number"
                            required
                            placeholder="Only Number"
                            className="form-control"
                            value={this.state.ticketnumber}
                            onChange={this.onChangeTicketNumber}
                            />
                    </div>
                    <div className="form-group">
                        <label>Site Number: </label>
                        <input type="text"
                            required
                            placeholder="DXL00111"
                            className="form-control"
                            value={this.state.siteNumber}
                            onChange={this.onChangeSiteNumber}
                            />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control"
                            required
                            placeholder="Work Completed"                     
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className=" btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}