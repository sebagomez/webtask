import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';


class CarPerformance extends Component {

	render() {
		return (
			<div className="performance" >
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12} sm={12} lg={12}>
							<h3>{this.props.title}</h3>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4 className="smallLabel">Cylinders</h4>
						</Col>
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4>{this.props.car.Cylinders}</h4>
						</Col>
					</Row>
					<Row componentClass="hr" className="show-grid lineRow"/>
					<Row className="show-grid">
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4 className="smallLabel">City MPG</h4>
						</Col>
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4>{this.props.car.MPGCity} MPG</h4>
						</Col>
					</Row>
					<Row componentClass="hr" className="show-grid lineRow"/>
					<Row className="show-grid">
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4 className="smallLabel">Highway MPG</h4>
						</Col>
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4>{this.props.car.MPGHighway} MPG</h4>
						</Col>
					</Row>
					<Row componentClass="hr" className="show-grid lineRow"/>
					<Row className="show-grid">
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4 className="smallLabel">Engine</h4>
						</Col>
						<Col xs={6} md={6} sm={6} lg={6}>
							<h4>{this.props.car.Engine}</h4>
						</Col>
					</Row>
				</Grid>
			</div>);
	}
}

export default CarPerformance;
