import React from "react";

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
                src={require("../image/csharp.jpg")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                        technology :
                      <ul>
                        C#,
                        ASP.NET,
                         mvc 5,
                        Microsoft SqlServer
                      
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
                src={require("../image/react-01.png")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                        technology :
                      <ls>
                        Node,
                        React,
                        MySql,
                        express
                         
                      
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
                src={require("../image/pythono01.png")}
              
              ></img>
            }
          </div>
      </div>
      <div class="flip-box-back ">
                        
                    <Figure.Caption>
                        technology :
                      <ls>
                        Python,
                        javascript,
                        MySql
                       
                      
                      </ls>
                       
                    
                     </Figure.Caption>
       
      </div>
    </div>
  </div>
    </div>

    
  );
};

export default ProjectList;
