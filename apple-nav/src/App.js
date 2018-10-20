import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavData from './Nav_Data';
import NavBar from './NavBar/NavBar'


class App extends Component {
  constructor(props) {
    super();
    this.state ={
      NavLinks: []
    }
  }

  componentDidMount() {
    this.setState({ NavLinks: NavData })
  };

  render() {
    return (
      <div className="App">
        <NavBar NavLinks={this.state.NavLinks} />
      </div>
    );
  }
}

export default App;
