import { VerticalTimeline, VerticalTimelineElement } from  'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css' ;
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import '../styles/Projects.css';






function Projects() {
  return (
    
    <div className="projectItem">
    <h2>MY PERSONAL CODING PROJECTS</h2>
    <VerticalTimeline lineColor={'#0000FF'}>               <VerticalTimelineElement 
        className="vertical-timeline-element-education" 
        date={'April, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}
        >
        <h3>FreeCodeCamp Projects on Web Responsive Design</h3>
        <ul className='projectlists'>
          <li>Build a Survey Form</li>
          
          <li>Build a Tribute Page</li>
          
          <li>Build a Technical Documentary Page</li>
          
          <li>Build a Product Landing Page</li>
          
          <li>Build a Personal Portfolio Webpage</li>

          <p>SKILLS USED : HTML & CSS, Bootstrap</p>
          <p>Verify all coding solutions at
          https://www.freecodecamp.org/certification/ogahcletus2021/responsive-web-design</p>
        </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element-education" 
        date={'March, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}
        >
        <h3>JavaScript Algorithms and Data Structures</h3>
        <ul className='projectlists'>
          <li>Palindrome Checker</li>
          
          <li>Roman Numeral Converter</li>
          
          <li>Caesars Cipher</li>
          
          <li>Telephone Number Validator</li>
         
          <li>Cash Register</li>

          <p>SKILLS USED: html, basic javascripts(ES5), ECMAScripts, ES6, Basic & Intermediate Algorithm Scripting, Conditionals, Arrays etc
          Object Oriented Programming, Functional Programming </p>

          <p>Verify all coding solutions at https://www.freecodecamp.org/certification/ogahcletus2021/javascript-algorithms-and-data-structures</p>
          
        </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element-education" 
        date={'May, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}
        >
        <h3>Front End Development Libraries</h3>
        <ul className='projectlists'>
          <li>Build a Random Quote Machine</li>
          
          <li>Build a Markdown Previewer</li>
          
          <li>Build a Drum Machine</li>
          
          <li>Build a JavaScript Calculator</li>
         
          <li>Build a 25 + 5 Clock</li>

          <p>SKILLS USED: html, CSS, basic javaScripts & ECMAScripts, Bootstrap, jQuery, Syntactically Awesome StyleSheets(SASS), React, Redux </p>

          <p>Verify all coding solutions at https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux</p>
          
        </ul>

        </VerticalTimelineElement>

      <VerticalTimelineElement 
        className="vertical-timeline-element-education" 
        date={'May, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}
        >
        <h3>Back End Development and APIs</h3>
        <ul className='projectlists'>
          <li>Timestamp Microservice</li>
          
          <li>Request Header Parser Microservice</li>
          
          <li>URL Shortener Microservice</li>
          
          <li>Exercise Tracker</li>
         
          <li>File Metadata Microservice</li>

          <p>SKILLS USED: html,basic javaScripts & ECMAScripts, Node.Js, NPM, HTTP/HTTPS Servers, Express, Middlewares, Mongoose & MongoDB</p>

          <p>Verify all coding solutions at https://www.freecodecamp.org/certification/ogahcletus2021/back-end-development-and-apis</p>
          
        </ul>

        </VerticalTimelineElement>   
        
    </VerticalTimeline>

    </div>
  )
}

export default Projects