import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SavedList, withConditionalRender }from './Movies/SavedList';
import List from './Movies/List';
import Movie from './Movies/Movie';
import FourOhFour from './FourOhFour';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if(this.state.savedList.includes(movie)){
      alert("You have already saved this movie!")
      return;
    }
    this.setState({savedList: [...this.state.savedList, movie]});
  };

  render() {
    return (
      <div className="container">
        <SavedList list={this.state.savedList}/>
        <Switch>
          <Route exact path="/" render={(props) => <List {...props} saveMovie={this.addToSavedList}/>}/>
          <Route exact path="/movies/:id" render={(props) => <Movie {...props} saveMovie={this.addToSavedList}/>} />
          {/* <Route component={FourOhFour}/> */}
        </Switch>
      </div>
    );
  }
}