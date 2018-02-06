import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

class App extends Component {

  render() {
    return <CarDetails carId="1"/>;
  }
}

export default App;
