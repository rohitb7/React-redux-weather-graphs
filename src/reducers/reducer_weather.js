import { FETCH_WEATHER } from '../actions/index';



export default function (state = [], action){ // this is current state   
	//console.log('Action Recieved', action);


	switch(action.type){

		case FETCH_WEATHER :
		console.log('go')
		//return state.concat([ action.payload.data ]);  //old syntax
		//dont do state.push(action.payload.data)//update state only by setState and never mutate it
		//in reducers always return a complete new state which will include old + new not just new // concat creates a new array that contains old as well
		//hence we are not mutating but returning a new version of stste
		//ES6 syntax 
		return [ action.payload.data, ...state ]; //o/p [city, city ,city]....new is at first
	}

	return state;
}