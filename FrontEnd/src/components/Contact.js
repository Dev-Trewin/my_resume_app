import React,{Component} from "react";
import {Row, Form, Col, Button } from "react-bootstrap";
import axios from 'axios';
 class Contact extends Component{ 

  constructor(props) {
    super(props)
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    this.onCreateNewMessage=this.onCreateNewMessage.bind(this);
    this.state = {
        name: '',
        email: '',
        message:''
    }
}


onChangeUserName(e) {
    this.setState({ name: e.target.value })

}


onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onChangeNewMessage(e) {
  this.setState({ message: e.target.value })
}


onCreateNewMessage(e) {
   
   e.preventDefault()
    const userObject = {
      contactname: this.state.name,
        email: this.state.email,
        message:this.state.message
    };

    axios.post('http://localhost:3000/api/message', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ name: '', email: '' , message:'' })
}
 render(){
          

  return (
    
    <div className="div_contact"> 
      <div className="div_inf shadow-lg p-3 mb-5 bg-white rounded">
         
           <label>Name: Roger Trewin</label><br/>  
           <label>Address: Resides in Calgary, Alberta</label><br/>
           <label>Phone: 403-615-6103</label><br/>
           <label>E-mail: rogertrewin.r@gmail.com</label>
      
      </div>
      <Form className="shadow-lg p-3 mb-5 bg-white rounded">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.onChangeUserName}/>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" placeholder="e-mail" value={this.state.email} onChange={this.onChangeEmail}/>
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Message" value={this.state.message} onChange={this.onChangeNewMessage}/>
          
        </Form.Group>

        
        <Button onClick={this.onCreateNewMessage}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  
    </div>
  );
 }
}

export default Contact;