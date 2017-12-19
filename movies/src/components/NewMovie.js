import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewMovie } from '../actions';

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      director: '',
      metascore: '',
      star1: '',
      star2: '',
      star3: ''
    };
  }

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleDirector = (event) => {
    this.setState({ director: event.target.value });
  }

  handleMetascore = (event) => {
    this.setState({ metascore: event.target.value });
  }

  handleStar1 = (event) => {
    this.setState({ star1: event.target.value });
  }

  handleStar2 = (event) => {
    this.setState({ star2: event.target.value });
  }

  handleStar3 = (event) => {
    this.setState({ star3: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const stars = [this.state.star1, this.state.star2, this.state.star3];
    const movie = {
      id: Math.random().toString(36).substr(2, 9),
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars
    }
    this.props.addNewMovie(movie);
    setTimeout(() => {
      this.props.history.push("/movies");
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Please add the movie information</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.title}
            placeholder="Movie Title"
            onChange={this.handleTitle}
          />
          <input 
            type="text"
            value={this.state.director}
            placeholder="Movie Director"
            onChange={this.handleDirector}
          />
          <input 
            type="text"
            value={this.state.metascore}
            placeholder="Movie Metascore"
            onChange={this.handleMetascore}
          />
          <input 
            type="text"
            value={this.state.star1}
            placeholder="Movie Star"
            onChange={this.handleStar1}
          />
          <input 
            type="text"
            value={this.state.star2}
            placeholder="Movie Star"
            onChange={this.handleStar2}
          />
          <input 
            type="text"
            value={this.state.star3}
            placeholder="Movie Star"
            onChange={this.handleStar3}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addNewMovie })(NewMovie);