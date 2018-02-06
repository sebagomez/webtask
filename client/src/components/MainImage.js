import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MainImage extends Component {

	render(){
		return (<img className="mainImage" src={this.props.imageUrl}/>);
	}
}

export default MainImage;
