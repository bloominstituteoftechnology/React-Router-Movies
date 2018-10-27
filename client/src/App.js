import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList
    savedList.push(movie)
    this.setState({ savedList })
  }

  render () {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route
          exact
          path='/'
          component={MovieList}
          save={this.addToSavedList}
        />
        <Route
          path='/movies/:id'
          render={props => <Movie {...props} save={this.addToSavedList} />} // Allows you to click on a movie and add it to a save list on top, working on functionality so you don't have to actually click on the movie itself.
        />
      </div>
    )
  }
}
