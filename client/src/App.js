import React, { Component } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

{
  /* <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={NewsFeed} />
  </div>
</Router>
If the location of the app is / then the UI hierarchy will be something like: <div>
  <Home />
  <!-- react-empty: 2 -->
</div>
And if the location of the app is / news then the UI hierarchy will be: <div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div> */
}

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
        {/* <nav>
          <Link to="/"> Movie List </Link>
          <Link to="/movies/:id"> Movie </Link>
        </nav> */}
        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
        </div>
      </div>
    );
  }
}
