import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Navigation from './components/navigation'
import ShowMovies from './components/showMovies';
import Test from './components/test'
import MovieDetails from './components/MovieDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={App}></Route>
        <Route exact path='/movies' component={ShowMovies}></Route>
        <Route exact path='movies/:id' component={MovieDetails}></Route>
        {/* <ShowMovies /> */}
      </div>
    );
  }
}
export default App;
