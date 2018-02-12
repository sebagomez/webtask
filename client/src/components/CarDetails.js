import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainImage from './MainImage';
import CarData from './CarData';
import NavBar from './NavBar';
import Gallery from './Gallery';
import ImageGrid from './ImageGrid';
import CarPerformance from './CarPerformance';
import Footer from './Footer';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class CarDetail extends Component {

	state = {
		car: {},
		selectedImage: ''
	}

	static propTypes = {
		carId: PropTypes.string
	}

	componentDidMount() {
		//Get the data

		//https://davidwalsh.name/fetch
		var request = new Request('http://localhost:3003/car/' + this.props.carId, {
			method: 'get',
			headers: new Headers({ 'Content-Type': 'application/json' })
		}
		);

		let that = this;
		fetch(request).then(function (response) {
			return response.json();
		}).then(function (j) {
			that.setState({ car: j, selectedImage: j.images[0] });
		}).catch(function (err) {
			// Error :(
			debugger;
		});
	}

	selectedImageChanged(imageUrl){
		this.setState({...this.state, selectedImage: imageUrl});
	}

	render() {
		if (!this.state.car.car)
			return (<div>No car selected :( </div>);

		return (
			<div>
				<NavBar />
				<Grid>
					<Row className="show-grid">
						<Col xs={12} mdHidden={true} smHidden={true} lgHidden={true}>
							<Gallery images={this.state.car.images} />
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xsHidden={true} md={8} sm={8} lg={8}>
							<MainImage imageUrl={this.state.selectedImage} />
						</Col>
						<Col xs={12} md={4} sm={4} lg={4}>
							<CarData car={this.state.car.car} />
						</Col>
					</Row>
					 <Row className="show-grid">
						<Col xsHidden={true} md={12} sm={12} lg={12}>
							<ImageGrid images={this.state.car.images} cb={this.selectedImageChanged.bind(this)}/>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={12} mdHidden={true} smHidden={true} lgHidden={true}>
							<Button className="wideButton" bsStyle="success">CALL US</Button>
						</Col>
					</Row>					
					<Row className="show-grid">
						<Col xs={12} md={6} sm={6} lg={6}>
							<CarPerformance car={this.state.car.car} title={"EXTERIOR"} />
						</Col>
						<Col xsHidden={true} md={6} sm={6} lg={6}>
							<CarPerformance car={this.state.car.car} title={"PERFORMANCE"} />
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={12} mdHidden={true} smHidden={true} lgHidden={true}>
							<CarPerformance car={this.state.car.car} title={"PERFORMANCE"} />
						</Col>
					</Row>
				</Grid>
				<Footer />
			</div>
		);
	}
}

export default CarDetail;