import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  //  saveMovie = () => {
  //    const addToSavedList = this.props.addToSavedList;
  //    addToSavedList(this.state.movie)
  //  }



  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const findMovie = savedList.find(el => movie.id === el.id);
    if (findMovie) {
      this.setState({ movieInList: `You've already saved that movie!` });
      setTimeout(() => this.setState({ movieInList: null }), 2000);
    } else {
      savedList.push(movie);
    }

    this.setState({ savedList });
  };

  render() {
    const { movieInList } = this.state;
    return (
      <div>
        {movieInList !== null ? (
          <h3 className="movie-warning">{movieInList}</h3>
        ) : null}
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}



// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

