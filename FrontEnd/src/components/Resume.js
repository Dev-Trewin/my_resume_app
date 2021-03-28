
import React, { Component } from "react";
import Volunteer from "./Volunteer.js";
import Education from "./Education"
import Experience from "./Experience.js";
import { Accordion, Card, Button } from "react-bootstrap";


class Resume extends Component {
  render() {
    return (



      <div className="shadow-lg p-3 mb-5 bg-white rounded">

        <div className="div_prof_pict">
          {
            <img className="div_prof_pict"
              src={require("../image/image_perfil.jpeg")}

            ></img>
          }

        </div>
        <div className="div-contact-inf">
          <h2>Roger Trewin</h2><br />
          <h6>Calgary, Alberta, Canada</h6>
          <h6>Phone: 403-615-6103</h6>
          <h6>e-mail:rogertrewin.r@gmail.com</h6>
        </div>

        <br />

        <div className="summary-p">
          <p >
            <h3>Summary</h3>
            <br />
                Hardworking, Persistent and a reliable worker, confident, focused
                and a quick learner, team work driven. Experienced on technical
                proficiencies such as.<br />

            <span class="badge badge-secondary">Scrum</span>
            <span class="badge badge-secondary">GitHub</span>
            <span class="badge badge-secondary">SQL Server</span>
            <span class="badge badge-secondary">MySQL Server</span>
            <span class="badge badge-secondary">MongoBD</span>
            <span class="badge badge-secondary">ASP.NET MVC 5</span>
            <span class="badge badge-secondary">CSS</span>
            <span class="badge badge-secondary">Bootstrap</span>
            <span class="badge badge-secondary">JavaScript</span>
            <span class="badge badge-secondary">React</span>
            <span class="badge badge-secondary">React Native</span>
            <span class="badge badge-secondary">Visual C#</span>
            <span class="badge badge-secondary">AXIO</span>
            <span class="badge badge-secondary">Redux</span>
            <span class="badge badge-secondary">Jest and Enzyme</span>
           
            
          </p>

        </div>
        <div className="div-accordion shadow-lg p-3 mb-5 rounded">
          <Accordion>
            <Card>
              <Card.Header>
                Experience
              </Card.Header>
                <Card.Body>
                  <Experience />
                </Card.Body>
               
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Volunteer experience
                  </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Volunteer />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Education
                  </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Education />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>


    );
  }
}

export default Resume;
