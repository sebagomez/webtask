import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

class ImageGrid extends Component {

	static propTypes = {
		images: PropTypes.array,
		selectedImage: PropTypes.string
	}

	handleImageChange(e){
		if (this.props.cb)
			this.props.cb(e.currentTarget.getAttribute('src'));
	}

	render(){
		let that = this;
		return (
			<Grid>
				<Row className="show-grid">
				{
					this.props.images.map(function (image, index){
						return (<Col key={index} xsHidden={true} md={2} sm={2} lg={2}>
							<img height="200px" src={image} onClick={that.handleImageChange.bind(that)}/>
						</Col>);
						
					})
				}
				</Row>
			</Grid>
		);
	}
}

export default ImageGrid;
