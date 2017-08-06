import React, { Component } from 'react';
import { addMovie } from '../actions';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import '../App.css';


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value })
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  } 

  handleDirectorChange = (event) => {
    this.setState({ director: event.target.value })
  }

  handleMetascoreChange = (event) => {
    this.setState({ metascore: event.target.value })
  }
  
  handleStarsChange = (event) => {
    this.setState({ stars: event.target.value })
  }
  newMovie = (event) => {
    event.preventDefault();
    const movie = {
      id: this.state.id,
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars,
    };
    this.props.dispatch(addMovie(movie));
  }
  render() {
    return (
      <div className="add-movie">
        <form>
          <input onChange={this.handleIdChange} type='number' placeholder="ID" value={this.state.id} />
          <input onChange={this.handleTitleChange} type='text' placeholder="Title" value={this.state.title} />
          <input onChange={this.handleDirectorChange} type='text' placeholder="Director" value={this.state.director} />
          <input onChange={this.handleMetascoreChange} type='number' placeholder="Metascore" value={this.state.metascore} />
          <input onChange={this.handleStarsChange} type='text' placeholder="Stars" value={this.state.stars} />
          <button type="submit" onClick={this.newMovie}>Add a movie!</button>
          </form>
          <MoviesList />
      </div>
    )
  }
}

export default connect()(AddMovie);