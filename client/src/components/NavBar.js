import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NavBar extends Component {

	render() {
		return (
		<div>
			<nav className="navbar navbar-inverse">
				<div className="navbar-right">
					<span className="inverted glyphicon glyphicon-download"></span>
					<i className="glyphicon glyphicon-home"></i>
				</div>
			</nav>
		</div>);
	}
}

export default NavBar;
