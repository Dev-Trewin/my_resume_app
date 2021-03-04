import React,{Component} from 'react';
import Home  from "./Home";
 import Banner from "./Banner";
 import Router from "./Router";
import OuthForm from './OuthForm';
 class Root extends Component{

 render(){
     return(
    

     true ? <Router/> : <OuthForm/>   

    
     );
 }


}

export default Root