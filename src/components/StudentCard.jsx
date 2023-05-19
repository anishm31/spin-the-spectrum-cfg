import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import "./StudentCard.css"
import ProfileImage from '../images/DecAndLys.jpg'
import { Tab } from 'bootstrap'


const StudentCard = ({studentData}) => {
    return (
      <div className="row">
        <div className='col-5'>
          <Card style = {{backgroundColor: 'lightgrey' ,height: 700}}> {/**Making height of columns to reach max height */}
          <div className='priorityStudentTitle'>
            <h1>Priority Students</h1>
          </div>
            <Card.Body>
            <div>
              {/**Providing framework for focus card, will contain description of student currently with highest absolute value of heart rate */}
              
          
              
              <div><h2>Declan Gazil &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p></p>  </h2></div>
              <h2></h2>
              <img src={require('../images/declan_gazil.jpg')}  class="rounded" width = {200} height = {200} />
              <h3>Solutions</h3>
              <ul>
                <li>Dance all around</li>
                <li>HopScotch</li>
                <li>Play Basketball</li>
                
              </ul>
              
            </div>
            <p></p>
            
            <div className='col-6'>
            <p></p>
            <div><h2>Nicholas Chau <p></p></h2></div>
              <h2></h2>
              <img src={require('../images/nicholas_chau.PNG')}  class="rounded" width = {200} height = {200} />
              <h3>Solutions</h3>
              <ul>
                <li>Destimulate</li>
                <li>Turn Off Lights</li>
                <li>Play Classical Music</li>
              </ul>
            </div>
            </Card.Body>
          </Card>
        </div>
        {/**Second column of page that holds all picture, name, current heart rate */}
        <div className='col-6'>
        <Card>
          <div className= 'studentTitle'>
          <h2> Students </h2></div>
        <Card.Body>
          {
            studentData.map((student) => (
              <div>
                   <img
              src={student.profilePic}
              alt={`picture of ${student.name}`}
              width={90}
              height={90}
              />
              <button
              className='infoButton' //button to deliver information
              color='red'
                onClick = {() => {
                  alert(`Triggers: ${student.triggersDescription} Potential Solutions: ${student.bestSolutionDescription}`);
                }}
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </button>
              <p>
                { //store name
                  `Name: ${student.name}`
                }
              </p>
              <p>{ //store current heart rate
                  `Heart Rate: ${student.currentHeartRate}`
                }
              </p>
              <p>{ //stores triggers
                  //`Triggers: ${student.triggersDescription}`
              }
              </p>
              <p>{ //stores common solutions
                  //`Potential Solutions: ${student.bestSolutionDescription}`
                }
              </p>
              </div>
            ))
          }
        </Card.Body>
      </Card>
      <div className = "row">
        <p></p>
        <div className = "alertTitle">
        <img src={require('../images/alert.png')}  class="rounded" width = {100} height = {100} />
        </div>
      <div class="alert alert-danger" role="alert">
          <strong>Make sure you're watching!</strong> Declan is showing strong signs of distress.
        </div>
      <div class="alert alert-warning" role="alert">
        <strong>Make sure you're watching!</strong> Nicholas is showing moderate signs of distress.
      </div>

</div>
      </div>
        </div>
    )
  }

  export default StudentCard
