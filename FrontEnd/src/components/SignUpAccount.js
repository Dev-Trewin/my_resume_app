import React,{Component} from "react";
import {Row, Form, Col, Button } from "react-bootstrap";
import axios from 'axios';
 class SignUpAccount extends Component{ 

  constructor(props) {
    super(props)
  
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onCreateNewAccount=this.onCreateNewAccount.bind(this)
    this.state = {
     
        name: '',
        password: '',

    }
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
   
        name: this.state.name,
        password: this.state.password
       
    };

    axios.post('http://localhost:8787/account/new', accountObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ name: '', password: '' })
}
 render(){
          

  return (
    
    <div className="div_content shadow p-3 mb-5 bg-white rounded" > 
     <h2>Create Account</h2>
      

     <form>
      <Form.Group >
          <Form.Control type="text"
           placeholder="Your Name" 
           value={this.state.name} 
           onChange={this.onChangeUserName}/><br/>
           <Form.Control type="text"
           placeholder="Your Email" 
           value={this.state.email} 
           onChange={this.onChangeEmail}/><br/>
          <Form.Control type="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.onChangePassword}/><br/>
           <Form.Control type="password" 
          placeholder="Repeat your Password" 
          value={this.state.repeatpassword} 
          onChange={this.onChangeRepeatPassword}/>
                 
        </Form.Group>
     
        <div>
        <Button onClick={this.onCreateNewAccount}  variant="primary" type="submit">
          Submit
        </Button>
        </div>
        </form>

      </div>
      
      
     
  
  );
 }
}

export default SignUpAccount;