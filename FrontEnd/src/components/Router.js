
import React, { Component } from "react";
import { Switch, Route,HashRouter,Link } from "react-router-dom";
import Home from "./Home.js";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Message from "./Message";
import SignUpAccount from "./SignUpAccount";
import Navigation from "./Navigation";
import Banner from "./Banner";
import OuthForm from "./OuthForm.js";

class Router extends Component
{

    render(){
        return(
        <HashRouter basename='/'>
         <Banner/>
         <Navigation/>
        <Switch>
            
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Message" component={Message} />
        <Route path="/SignUpAccount" component={SignUpAccount} />
        {/*<Router path="OuthForm" component={OuthForm}/>*/}


        </Switch>
        </HashRouter>);



    }

            


}
export default Router