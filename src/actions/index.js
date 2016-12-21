import axios from 'axios';



const API_KEY = '9177b5cab9c26f7563bf9aec3df2681f';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us` // always USA country

	const request = axios.get(url); // returns a promise


	console.log(request); 


//const request = "abc"; // returns a promise

	console.log('request:  ' + request);

		return{
			type : FETCH_WEATHER,
			payload : request // here there are 2 stages 1. promise unresolved and promise resolved (middleware)
		};					  // refer the diagram	

}






/*
//•	Over 2 years of Industry experience and 2 years of Academic experience in web programming and web technologies.
•	Executed and contributed to full-stack web development projects, with an emphasis on front end features, 
backend Node.js, Java Spring MVC, JAX-RS, browser manipulation, and cross-browser compatibility.
•	Deep knowledge of AJAX, JSON, HTML, XML, CSS, REST and associated JavaScript and CSS frameworks.
•      More than 2 years experience in Angularjs  
•       React.js enthusiast
*/