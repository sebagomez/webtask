import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CarDetail extends Component {

	state = {
		car: {}
	}

	static propTypes = {
		carId: PropTypes.string
	}

	componentDidMount(){
		//Get the data

		//https://davidwalsh.name/fetch
		var request = new Request('http://localhost:3003/car/' + this.props.carId, {
			method: 'get',
			headers: new Headers({ 'Content-Type': 'application/json' }, {'Access-Control-Allow-Origin':'http://localhost:3000'})
			}
		);

		let that = this;
		fetch(request).then(function(response) {
			return response.json();
		}).then(function (j){
			debugger;
			that.setState({ car: j});
		}).catch(function(err) {
			// Error :(
			debugger;
		});
	}

	render() {
	  return (
			<div>
				<h1>Car {this.props.carId} is a {this.state.car.Brand ? this.state.car.Brand : 'N/A'} {this.state.car.Model ? this.state.car.Model : 'N/A'}</h1>
			</div>
	  );
	}
  }
  
  export default CarDetail;