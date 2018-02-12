import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Nav, Navbar, NavItem, Row, Col } from 'react-bootstrap';



class Footer extends Component {

	render() {
		return (
				<div className="footer">
					<div><small>About us  /  Terms  /  Privacy Policy</small></div>
					<div><small>@sebagomez all rights reserved (not really)</small></div>
				</div>
		);
	}
}

export default Footer;
