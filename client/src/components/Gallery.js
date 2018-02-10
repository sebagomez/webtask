import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem } from 'react-bootstrap';


class Gallery extends Component {

	static propTypes = {
		images: PropTypes.array
	}

	render() {

		if (this.props.images.length === 0)
			return <h1>No images available :(</h1>

		return (
			<Carousel>
				{
					this.props.images.map(function (image, index) {
						return (
							<CarouselItem key={index}>
								<img height={256} src={image} />
							</CarouselItem>
						);
					})
				}
			</Carousel>);
	}
}

export default Gallery;
