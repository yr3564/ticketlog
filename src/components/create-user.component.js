import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username:''
        }
    }
// function for changing username state
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onSubmit (e){
        e.preventDefault();
        const user={
            username: this.state.username
        }
        axios.post('http://localhost:5000/users/add',user)
            .then(res=> console.log(res.data));
        
        this.setState({
            username:''
        })
        window.location = '/';
    }
    render(){
        return(            
            <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="userform">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name"
                        required
                        value={this.state.username}
                        onChange={this.onChangeUsername}/>                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        
        )
    }

}