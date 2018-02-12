import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import config from './Config';

class MainImage extends Component {

	render() {
		let imageUrl = config.ServerUrl + config.ImagesFoler + this.props.imageUrl;
		return (<div className="imgParent">
			<Image className="mainImage" src={imageUrl} />
		</div>
		);
	}
}

export default MainImage;
