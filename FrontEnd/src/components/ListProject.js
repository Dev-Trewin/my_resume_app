import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure'

const ProjectList = () => {
  return (
    <div className="div_projectlist">
      
    <div class="flip-box  div_portfolio rounded">
    <div class="flip-box-inner">
      <div className="flip-box-front w3-container w3-center">
      <div className="div_prof_pict" >
            {
              <img
                src={require("../image/Mern.png")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                        Project:Catalog of EvolveU Projects
                        Technologies :
                      <ul>
                        React,
                        Tailwind,
                        NodeJs,
                        Express,
                        Axio,
                        Redux,
                        MongoDB<br/>
                        <a href="https://evolveu-projects.herokuapp.com/">View Site</a>
                      </ul>
                     
                     </Figure.Caption>
       
      </div>
    </div>
  </div>
     
           
    <div class="flip-box  div_portfolio rounded">
    <div class="flip-box-inner">
      <div className="flip-box-front w3-container w3-center">
      <div className="div_prof_pict" >
            {
              <img
                src={require("../image/reactnative.png")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                       Project:Craft Selling app<br/>
                        technology :<br/>
                      <ls>
                        React Native,
                        NodeJs,
                        Express,
                        Redux,
                        Axio,
                        Expo,
                        MySql<br/>
                        <a href="https://www.figma.com/proto/K3LntySPZgIGNjdBR6Ex6E/Craft-app?node-id=116%3A1&scaling=scale-down">Demo on Figma</a>
                        
                         
                      
                      </ls>
                       
                    
                     </Figure.Caption>
       
      </div>
    </div>
  </div>



  <div class="flip-box  div_portfolio rounded">
    <div class="flip-box-inner">
      <div className="flip-box-front w3-container w3-center">
      <div className="div_prof_pict" >
            {
              <img
                src={require("../image/MyBlog.png")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                        Project: My Blog<br/>
                        technology :
                      <ls>
                        React,
                        Tailwind,
                        NodeJs,
                        Express,
                        Axio,
                        Redux,
                        MongoDB
                      </ls>
                       
                    
                     </Figure.Caption>
       
      </div>
    </div>
  </div>
    </div>

    
  );
};

export default ProjectList;
