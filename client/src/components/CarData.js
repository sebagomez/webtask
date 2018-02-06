import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CarData extends Component {

	render(){
		return (<div>
					<h1>{this.props.car.Brand} {this.props.car.Model}</h1>
					<h4 className="smallLabel">Year</h4>
					<div>{this.props.car.Year}</div>
					<h4 className="smallLabel">Price Range</h4>
					<div>${this.props.car.MinPrice} - ${this.props.car.MaxPrice}</div>
					<h4 className="smallLabel">Item Number: #1395P</h4>
					<h4 className="smallLabel">VIN: 3GNDA13D96S631406</h4>
					<div className="stats">
						<div>
							<h4 className="smallLabel">Views</h4>
							<h4 className="greenh4">37</h4>
						</div>
						<div>
							<h4 className="smallLabel">Saves</h4>
							<h4 className="greenh4">20</h4>
						</div>
						<div>
							<h4 className="smallLabel">Shares</h4>
							<h4 className="greenh4">15</h4>
						</div>
					</div>
			</div>);
	}
}

export default CarData;
