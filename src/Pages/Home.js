import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from  "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
        <div className="about">
          <h2>Hello, My Name is Cletus!</h2>
          <div className="prompt">
            <p>
            I am an engineer and a software developer with a passion for learning, solving problems and creating solutions...</p>
            <div className="socialmedia">
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
            <PhoneIcon />
            </div>
            
          </div>
        </div>
        <div className="skills">
          <h2>SKILLS</h2>
          <ul className="list">
          <li className="item">          
            <h3>JavaScript programming</h3>
              <span>Basic JavaScript, ECMAScript, Debugging, Basic Data Structures, Basic& Intermediate Algoririthm Scripting, Object Oriented Programming, Functional Programming etc
              </span>
          </li>
          <li className="item">
            <h3>Front-End</h3>
              <span>
                HTML, CSS, Bootstrap, JQuery, Syntactically Awesome StyleSheets(SASS), React.js, Redux etc
              </span>

          </li>
          <li className="item">
            <h3>Back-End</h3>
              <span>
                Node.js, Node Packets Managers(NPM), HTTP/HTTPS Servers, Express Servers, Package Dependencies file system, Objects, JSONS, Middlewares,RESTful APIs, Mongoose & MongoDB NoSQL etc

              </span>

          </li>
          <li className="item">
            <h3>Project Management</h3>
              <span>
              Project Initiation & Planning, Linear Project Execution & Running, Agile Project Execution, SCRUM, Project Evaluation & Closure, Project management(e.g Asana) 
              </span>

          </li>


          </ul>

        </div>

    </div>
  )
}

export default Home