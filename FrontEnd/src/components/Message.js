import React, { Component } from 'react';
import {Form, Button,Container,Row,Col } from "react-bootstrap";

   class Message extends React.Component {
   
   constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded:false
    }

   }
  
    componentDidMount() {
      fetch('https://blooming-citadel-34841.herokuapp.com/api/messages')
      .then(res => res.json())
      .then(json => {
           this.setState({
             isLoaded:true,
             items:json
           })
      } );   
   
    }
    
  
    render() {
         const {isLoaded,items}=this.state;
      
      return (
        <div>
            <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              return (
                <tr>
                
                  <td>{item.contactname}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      
          
    </div>
    
    )
    }
  }
  export default Message;