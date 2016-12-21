import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/chart';

import GoogleMap from '../components/google_map'







class WeatherList extends Component{

	renderWeather(cityData){

	const name = cityData.city.name;	 //unique name or key
	
    const temps = cityData.list.map(weather => weather.main.temp); 

    const pressures  = cityData.list.map(weather => weather.main.pressure); 

    const humidities  = cityData.list.map(weather => weather.main.humidity); 

    const lon  = cityData.city.coord.lon;

    const lat  = cityData.city.coord.lat;

	//console.log(temps);


	//const temps = cityData.list.map(function(weather){ check this code
	//	return weather.main.temp;
	//});

	/*
	
	///
	we are making an array of teperature 
	like this var temps = [120,213,134,1123]; form refer the json on dropbox link
	https://www.dropbox.com/s/0o2amkyj36zqfsl/Screenshot%202016-11-18%2011.29.58.png?dl=0
	*/

		return (
			<tr key={name}>
				<td> <GoogleMap lon={lon} lat={lat} /> </td>
				<td> <Chart data={temps} color="orange" units="K"/> </td>
				<td> <Chart data={pressures} color="green" units="hPa"/> </td>
				<td> <Chart data={humidities} color="black" units="%"/> </td>	
			</tr>
			);
	}


	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City </th>	
						<th> Temperature (K)</th>
						<th> Pressure (hPa)</th>
						<th> Humidity (%)</th>					
					</tr>
				</thead>	
				<tbody>
						{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>	
			);
	}
}



//ES6 { weather } = const weather = state.weather
/*
function mapStateToProps({ weather }){
	return { weather : weather };
	//or
	//return { weather };
}
*/
function mapStateToProps(state){
	return { weather:state.weather };
}



export default connect(mapStateToProps)(WeatherList); //why no NULL is not here
