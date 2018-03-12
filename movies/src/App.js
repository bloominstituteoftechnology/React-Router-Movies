import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {List, MoviePage} from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={List}/>
        <Route path="/:id" component={MoviePage}/>
      </div>
    )
  }
}

export default App
