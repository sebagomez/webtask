import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import config from './Config';

class ImageGrid extends Component {

	static propTypes = {
		images: PropTypes.array,
		selectedImage: PropTypes.string
	}

	handleImageChange(e) {
		if (this.props.cb)
			this.props.cb(e.currentTarget.getAttribute('file'));
	}

	render() {
		let that = this;
		return (
			<Grid>
				<Row className="show-grid">
					{
						this.props.images.map(function (image, index) {
							let imageUrl = config.ServerUrl + config.ImagesFoler + image;
							return (
								<Col key={index} xsHidden={true} md={2} sm={2} lg={2}>
									<img className="gridImage" height="200px" src={imageUrl} file={image} onClick={that.handleImageChange.bind(that)} />
								</Col>
							);
						})
					}
				</Row>
			</Grid>
		);
	}
}

export default ImageGrid;
