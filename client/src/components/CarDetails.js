import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainImage from './MainImage';
import CarData from './CarData';

class CarDetail extends Component {

	state = {
		car: {},
		selectedImage: ''
	}

	static propTypes = {
		carId: PropTypes.string
	}

	componentDidMount(){
		//Get the data

		//https://davidwalsh.name/fetch
		var request = new Request('http://localhost:3003/car/' + this.props.carId, {
			method: 'get',
			headers: new Headers({ 'Content-Type': 'application/json' })
			}
		);

		let that = this;
		fetch(request).then(function(response) {
			return response.json();
		}).then(function (j){
			that.setState({ car: j, selectedImage: j.images[0]});
		}).catch(function(err) {
			// Error :(
			debugger;
		});
	}

	render() {
		if (!this.state.car.car)
			return (<div>No car selected :( </div>);

		return (
			<div>
				<div className="header"></div>
				<div className="flexMain">
					<MainImage imageUrl={this.state.selectedImage}/>
					<CarData car={this.state.car.car}/>
				</div>
			</div>
	  );
	}
  }
  
  export default CarDetail;