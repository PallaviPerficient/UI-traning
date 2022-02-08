import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading/Heading';
import Paragraph from './Paragraph';
import MainContent from './MainContent';
import Header from './Header/Header';
import Candidate from './Candidate/Candidate';
import InterviewerName from './InterviewerName/InterviewerName';
import InterviewDate from './InterviewDate/InterviewDate';
import Designation from './Designation/Designation';
import Selection from './SelectionStatus/Selection';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';



const first_name = "Pallavi";
const last_name = "Kanfade";
const currDate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1 contentEditable="true" > My name is {first_name} {last_name} </h1>
    <p>My lucky number is {Math.random()}</p>
    <p>{3 + 3}</p>
    <h2>hii {` PK ${first_name}` + " "}{`${last_name}` + " "}here</h2>
    <p>IF Else{

      (3 < 4) ? (
        console.log(true)
      ) : (
        console.log(false)
      )

    }

    </p>
    <h2>Hello All</h2>
    <p>List of 5 Best Serire</p>
    <ol>
      <li>
        Dark
      </li>
      <li>
        Extra Curricular
      </li>
      <li>
        MY holo Love
      </li>
      <li>
        Mr Robot
      </li>
    </ol>
    <p>Curent Date and Time!!</p>
    <p>Current Date is = {currDate}</p>
    <p>Current time is ={currtime}</p>

    <Paragraph />
    <MainContent />
    <Header />
    <Heading />
    <Container>

      <div className="candidate">
        <Candidate label={'Candidate: '} />
      </div>

      <div className="candidate">
        <InterviewerName label={'Interviewer Name : '} />
      </div>

      <div className="candidate">
        <InterviewDate label={'Interview Date : '} />
      </div>

      <div className="candidate">
        <Designation label={'Designation :'} />
      </div>

      <div className="candidate">
        <Selection label={'Selection Status :'} />
      </div>
    </Container>
  </>,
  document.getElementById("root"));
