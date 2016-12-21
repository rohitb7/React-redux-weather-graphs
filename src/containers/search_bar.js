import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { term: '' }; //value of the input will map to search term

	  this.onInputChange = this.onInputChange.bind(this); // bind in constructor

	  this.onFormSubmit = this.onFormSubmit.bind(this); // bind in constructor
	  
	}


	onInputChange(event){
		//console.log(event.target.value);
		this.setState({ term : event.target.value });

	}


	onFormSubmit(event){
		event.preventDefault();
		//// we need to go and fetch data
		console.log(this.state.term); 
		
		this.props.fetchWeather(this.state.term); // sending term // function call

		this.setState({ term: ''})// clearing after submit

	}


	render() {
		return (
				<form onSubmit={this.onFormSubmit} clasName="input-group">					
					<input 
					placeholder = "Get a 5 day forcast" 
					className = "form-control"
					value = {this.state.term}
					onChange = {this.onInputChange}
					/>
					<span clasName="input-group-btn"> 
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>	
				</form>
			);
	}

	// methods
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch );
}


export default connect(null, mapDispatchToProps)(SearchBar); //null because mapDispatchToProps goes as a second argument

//null means we dont need any state here










