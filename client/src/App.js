import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList'
import Movie from './Movies/Movie'

import './index.css'

const App = (props) => {
  // const [savedList, setSavedList] = useState(movie)

  // const addToSavedList = (movie) => {
  //   setSavedList([...savedList, movie])
  // }
  return (
    <div>
      s */}
      <Route exact path="/" component={MovieList} />
      <Route path="/Movie/:id" component={Movie} />
    </div>
  )
}

export default App
