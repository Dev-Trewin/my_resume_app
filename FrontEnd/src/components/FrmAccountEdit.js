import React,{Component} from "react";
import {Row, Form, Col, Button } from "react-bootstrap";
import axios from 'axios';
 class FrmAccountEdit extends Component{ 

  constructor(props) {
    super(props)
    this.onChangeId=this.onChangeId.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    
    this.state = {
        id:'',
        name: '',
        password: '',

    }
}

onChangeId(e) {
  this.setState({ id: e.target.value })
}
onChangeUserName(e) {
    this.setState({ name: e.target.value })

}


onChangePassword(e) {
  this.setState({ password: e.target.value })
}


onCreateNewAccount(e) {
   
   e.preventDefault()
    const accountObject = {
       id:this.state.id,
        name: this.state.name,
        password: this.state.password,
       
    };

    axios.post('http://localhost:8787/account/list', accountObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ id:'' , name: '', password: '' })
}
 render(){
          

  return (
    
    <div className="div_contact"> 
      <div className="div_inf shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Create Account</h2> 
              
      </div>
      <Form className="shadow-lg p-3 mb-5 bg-white rounded">
        <Form.Group controlId="formBasicEmail">
         <Form.Label>Id</Form.Label>
          <Form.Control type="text" placeholder="Id" value={this.state.id} onChange={this.onChangeId}/>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.onChangeUserName}/>
          <Form.Label>password</Form.Label>
          <Form.Control type="text" placeholder="e-mail" value={this.state.password} onChange={this.onChangePassword}/>
        
          
        </Form.Group>

        
        <Button onClick={this.onCreateNewMessage}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  
    </div>
  );
 }
}

export default FrmAccountEdit;