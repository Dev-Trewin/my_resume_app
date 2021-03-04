import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import { Switch, Route,HashRouter,Link } from "react-router-dom";
import Home from "./Home.js";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Message from "./Message";
import SignUpAccount from "./SignUpAccount";
import Root from "./Root";
import Router from "./Router";
const Navigation = (props) => {
  return (
    

       <div className="div_Navbar">

           <nav className="navbar-expand-md navbar-light bg-light">
               <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
               <span class="navbar-toggler-icon"></span>
               </button>
                         
               <div class="collapse navbar-collapse div_item_bar" id="navbarCollapse">
                   <div className="navbar-nav">
                      
                        <li class="nav-item nav-link active"><Link  to="/">Home  </Link></li>     
                        <li class="nav-item nav-link active"> <Link to="/Portfolio">Portfolio  </Link></li>
                        <li class="nav-item nav-link active">  <Link  to="/Contact">Contact </Link></li>
                        <li class="nav-item nav-link active">  <Link  to="/Message">Message </Link></li>
                        {/*<li class="nav-item nav-link active">  <Link  to="/SignUpAccount">Account  </Link></li>*/}
                    
                    </div> 
                 </div>
            </nav>
            </div>  
              

  );
};


export default Navigation;
