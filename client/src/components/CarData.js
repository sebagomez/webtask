import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';


class CarData extends Component {

	render() {
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12} sm={12} lg={12}>
							<h1>{this.props.car.Brand} {this.props.car.Model}</h1>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={6} md={12} sm={12} lg={12}>
							<h4 className="smallLabel">Year</h4>
							<div>{this.props.car.Year}</div>
							<h4 className="smallLabel">Price Range</h4>
							<div>${this.props.car.MinPrice} - ${this.props.car.MaxPrice}</div>
							<h4 className="smallLabel">Mileage</h4>
							<div>${this.props.car.Mileage} miles</div>
						</Col>
						<Col xs={6} mdHidden={true} smHidden={true} lgHidden={true}>
							<Row className="show-grid">
								<h4 className="smallLabel">Item Number: #1395P</h4>
								<h4 className="smallLabel">VIN: 3GNDA13D96S631406</h4>
								<div>Share this car <span className="glyphicon glyphicon-envelope"></span></div>
								<h4 className="smallLabel">Views</h4>
								<h4 className="greenh4">37</h4>
							</Row>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xsHidden={true} md={12} sm={12} lg={12}>
							<h4 className="smallLabel">Item Number: #1395P</h4>
							<h4 className="smallLabel">VIN: 3GNDA13D96S631406</h4>
							<div>Share this car <span className="glyphicon glyphicon-envelope"></span></div>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xsHidden={true} md={2} sm={2} lg={2}>
							<h4 className="smallLabel">Views</h4>
							<h4 className="greenh4">37</h4>
						</Col>
						<Col xsHidden={true} md={2} sm={2} lg={2}>
							<h4 className="smallLabel">Saves</h4>
							<h4 className="greenh4">20</h4>
						</Col>
						<Col xsHidden={true} md={2} sm={2} lg={2}>
							<h4 className="smallLabel">Shares</h4>
							<h4 className="greenh4">15</h4>
						</Col>
					</Row>
				</Grid>
			</div>);
	}
}

export default CarData;
