import React, { Component } from 'react'
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './StudentForm.css'
import logo from '../images/spinthespectrum.jpg'
//Creating framework of StudentForm that takes in student information for the user, will have functions that send between front and back end
//this will be the program basis for buttons throughout the program
export default class StudentForm extends Component {
    handleSubmit(e) {
        let student = {
        "name": "John",
        "age": 21,
        "baselineHeartRate": 78,
        "currentHeartRate": 87,
        "triggersDescription": "sound",
        "bestSolutionDescription": "running",
        "profilePic": "me",
        "calmingPic": "sky"
        }
        fetch("http://localhost:5000/addstudent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                student
            ),
        }).then(
            response => // response.json().then(data => {
                console.log(response)
            //}
            );//);
        
        fetch("http://127.0.0.1:5000/students").then(response => response.json().then(data => {
                console.log(data)
            })
        );
        e.preventDefault()
        const payload = {};
        const formData = new FormData(e.target);
        for (const [key,value] of formData.entries()) {
            payload[key] = value;
        }
        console.log(payload)
    }

    state = {
        clicked:false,
        highContrastVisual:false
    }
    

    render(){
        return (
           
         //Creation of multiple buttons for forms to save relavent data
         //calling class name to manipulate body of forms page

         <div className='centerBody'> 
            <form onSubmit = {this.handleSubmit}>
                <div className='logo'>
                    <img src = {require('../images/spinthespectrum.jpg') }/>
                </div>
                <h1 id='CompanyName'>Spin The Spectrum</h1>
                
                <label htmlFor = "student-name"><strong>Student Name: </strong></label><br />
                <input type = 'text' id = "student-name" name = "studentName" size="38"/><br /><br />

                <label htmlFor = "student-age"><strong>Student Age: </strong></label><br />
                <input type = 'text' id = "student-age" name = "studentAge" size="38"/><br /><br />

                <label htmlFor = "base-heartrate"><strong>Baseline Heart Rate: </strong></label><br />
                <input type = 'text' id = "base-heartrate" name = "heartRate" size="38"/><br /><br />

                <label htmlFor = "triggers"><strong>Common Triggers: </strong></label><br />
                <textarea id = "triggers" name = "studentTriggers" rows = "5" cols = "41" /><br /><br />

                <label htmlFor = "solutions"><strong>Known Solutions: </strong></label><br />
                <textarea id = "solutions" name = "studentSolutions" rows = "5" cols = "41" /><br /><br />

                <label htmlFor = "profile-pic"><strong>Profile Picture File Location: </strong></label><br />
                <input type = 'text' id = "profile-pic" name = "profilePic" size="38"/><br /><br />

                <label htmlFor = "calming-pic"><strong>Calming Picture File Location: </strong></label><br />
                <input type = 'text' id = "calming-pic" name = "calmingPic" size="38"/><br /><br />

                <Button variant = "primary" type = "submit">Submit</Button>
                <Button variant = "secondary" className= "px-4" onClick={() => this.setState({clicked: true})}>Continue To App</Button>
                {this.state.clicked && <Navigate to="/app"/>}
            </form>
            </div>
        )
    }
}