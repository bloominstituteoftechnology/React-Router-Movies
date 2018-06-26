import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import NoMatch from './Movies/NoMatch'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = (movie) => {
    const savedList = this.state.savedList.filter((film) => {
      return film.id !== movie.id
    })
    savedList.push(movie)
    this.setState({ savedList })
  }

  render () {
    return (
      <div>
        <SavedList
          list={this.state.savedList}
          addToSavedList={this.addToSavedList}
        />
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route
            path='/movies/:id'
            render={(props) => (
              <Movie {...props} addToSavedList={this.addToSavedList} />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
