import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Nav, Navbar, NavItem, Row, Col } from 'react-bootstrap';



class NavBar extends Component {

	onItemClick(){
		alert("Coming soon!");
	}

	render() {
		return (
				<div className="header">
					<div className="headerItem searchBox hideMobile" onClick={this.onItemClick}><span className="navIcon glyphicon glyphicon-search" aria-hidden="true"></span></div>
					<div className="headerItem" onClick={this.onItemClick}><span className="navIcon glyphicon glyphicon-map-marker" aria-hidden="true"></span></div>
					<div className="headerItem" onClick={this.onItemClick}><span className="navIcon glyphicon glyphicon-phone" aria-hidden="true"></span></div>
					<div className="headerItem hideMobile" onClick={this.onItemClick}><span className="navIcon glyphicon glyphicon-info-sign" aria-hidden="true"></span></div>
				</div>
		);
	}
}

export default NavBar;
