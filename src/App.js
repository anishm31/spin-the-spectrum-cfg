import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileImageDec from './images/declan_gazil.jpg'
import ProfileImageAM from './images/anish_madgula.jpg'
import ProfileImageKev from './images/kevin.jpg'
import ProfileImageNic from  './images/nicholas_chau.PNG'
import ProfileImageReu from './images/reuben_john.jpg'
import ProfileImageIan from './images/ian_fernandes.jpg'
import axios from "axios"

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom"

import{
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap'
import StudentCard from './components/StudentCard'
import StudentForm from './components/StudentForm'

function FormPage() { //What happens on form page
	return (
		<div>
			<h1>Form Page</h1>
		</div>
	);
}

function AppPage() { //what happens on App page
	return (
		<div>
			<h1>App Page</h1>
		</div>
	);
}

function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);
	useEffect(() => {
		fetch("http://127.0.0.1:5000/onstart").then(response => response.json().then(data => {
			console.log(data)
		})
		);
	}

	// useEffect(() => {
	// 	fetch("http://127.0.0.1:5000/students").then(response => response.json().then(data => {
	// 		console.log(data)
	// 	})
	// 	);
	// }



	)

	// axios({
	// 	method: "GET",
	// 	url:"http://127.0.0.1:5000/on-start",
	// })

	return (
	<Router>
		<Routes>
			<Route path="/" element={<StudentForm/>}/>
			<Route path="/app" element={<StudentCard studentData={studentData} />}/>
		</Routes>
	</Router>
	);
}
const studentData = [ //create an array of 6 student objects with all their parameters
	{
		currentID: 1,
		profilePic: ProfileImageDec,
		calmingPic: 'calmingPic.jpg',
		name: 'Dec',
		baselineHeartRate: 60,
		currentHeartRate: 180,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'yellow',
		age: 20
	},
	{	
		currentID: 2,
		profilePic: ProfileImageIan,
		calmingPic: 'calmingPic.jpg',
		name: 'Ian',
		baselineHeartRate: 62,
		currentHeartRate: 65,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'yellow',
		age: 23
	},
	{
		currentID: 3,
		profilePic: ProfileImageAM,
		calmingPic: 'calmingPic.jpg',
		name: 'Anish',
		baselineHeartRate: 60,
		currentHeartRate: 65,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'yellow',
		age: 20
	},
	{
		currentID: 4,
		profilePic: ProfileImageKev,
		calmingPic: 'calmingPic.jpg',
		name: 'Kevin',
		baselineHeartRate: 60,
		currentHeartRate: 75,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'red',
		age: 20
	},
	{
		currentID: 5,
		profilePic: ProfileImageReu,
		calmingPic: 'calmingPic.jpg',
		name: 'Reu',
		baselineHeartRate: 60,
		currentHeartRate: 70,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'yellow',
		age: 20
	},
	{
		currentID: 6,
		profilePic: ProfileImageNic,
		calmingPic: 'calmingPic.jpg',
		name: 'Nic',
		baselineHeartRate: 60,
		currentHeartRate: 150,
		triggersDescription: 'triggers',
		bestSolutionDescription: 'solutions',
		severityColor: 'green',
		age: 20
	}
]
export default App;
