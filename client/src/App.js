import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import styled from 'styled-components'

import { Route } from "react-router-dom"; 

const ClickInfo = styled.h3`
  text-align: center;
  margin-top: 2.5%;
`

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <ClickInfo>Click on the movie cards below for more details...</ClickInfo>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props} 
            addToSavedList={this.addToSavedList}/>)}} />
      </div>
    );
  }
}
