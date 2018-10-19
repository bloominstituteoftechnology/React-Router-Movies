import React, { Component } from "react"
import { Route } from "react-router-dom"

import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = movie => {
    console.log(this.state.savedList)
    console.log(movie)
    this.state.savedList.filter(item => {
      return item === movie
    })
    if (this.state.savedList.includes(movie)) {
      this.setState(prevState => {
        return { savedList: prevState.savedList }
      })
    } else {
      let savedList = [...this.state.savedList, movie]
      console.log(savedList)
      this.setState({
        savedList
      })
    }
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" render={props => <MovieList {...props} />} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie
              {...props}
              savedList={this.state.savedList}
              addToSavedList={this.addToSavedList}
            />
          )}
        />
      </div>
    )
  }
}
