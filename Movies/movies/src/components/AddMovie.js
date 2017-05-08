import React, { Component } from 'react';
import { getMovies, addMovie } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputYear: '',
      inputGenre: '',
      inputRating: '',
      inputRuntime: '',
      inputDirector: '',
      inputDescription: '',
      inputMetascore: '',
      inputStars: '',
      inputUserRating: '',
    };
    this.updateTitleValue = this.updateTitleValue.bind(this);
    this.updateYearValue = this.updateYearValue.bind(this);
    this.updateGenreValue = this.updateGenreValue.bind(this);
    this.updateRatingValue = this.updateRatingValue.bind(this);
    this.updateRuntimeValue = this.updateRuntimeValue.bind(this);
    this.updateDirectorValue = this.updateDirectorValue.bind(this);
    this.updateDescriptionValue = this.updateDescriptionValue.bind(this);
    this.updateMetascoreValue = this.updateMetascoreValue.bind(this);
    this.updateStarsValue = this.updateStarsValue.bind(this);
    this.updateUserRatingValue = this.updateUserRatingValue.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  updateTitleValue(event) {
    this.setState({
      inputTitle: event.target.value,
    });
  }
  updateYearValue(event) {
    this.setState({
      inputYear: event.target.value,
    });
  }
  updateGenreValue(event) {
    this.setState({
      inputGenre: event.target.value,
    });
  }
  updateRatingValue(event) {
    this.setState({
      inputRating: event.target.value,
    });
  }
  updateRuntimeValue(event) {
    this.setState({
      inputRuntime: event.target.value,
    });
  }
  updateDirectorValue(event) {
    this.setState({
      inputDirector: event.target.value,
    });
  }
  updateDescriptionValue(event) {
    this.setState({
      inputDescription: event.target.value,
    });
  }
  updateMetascoreValue(event) {
    this.setState({
      inputMetascore: event.target.value,
    });
  }
  updateStarsValue(event) {
    this.setState({
      inputStars: event.target.value,
    });
  }
  updateUserRatingValue(event) {
    this.setState({
      inputUserRating: event.target.value,
    });
  }
  addMovie() {
    const newMovie = {
      id: 14,
      title: this.state.inputTitle,
      year: this.state.inputYear,
      genre: this.state.inputGenre,
      rating: this.state.inputRating,
      runtime: this.state.inputRuntime,
      director: this.state.inputDirector,
      description: this.state.inputDescription,
      metascore: this.state.inputMetascore,
      stars: this.state.inputStars,
      userrating: this.state.inputUserRating,
    };
    console.log(newMovie);
    const promise = axios.post('http://localhost:5000/new-movie', newMovie);
    promise.then((response) => {
      this.props.getMovies();
    });
  }
  render() {
    return(
      <div>
        <form>
          <input value={this.state.inputTitle} onChange={this.updateTitleValue} placeholder="Title"/>
          <input value={this.state.inputYear} onChange={this.updateYearValue} placeholder="Year"/>
          <input value={this.state.inputGenre} onChange={this.updateGenreValue} placeholder="Genre"/>
          <input value={this.state.inputRating} onChange={this.updateRatingValue} placeholder="Rating"/>
          <input value={this.state.inputRuntime} onChange={this.updateRuntimeValue} placeholder="Runtime"/>
          <input value={this.state.inputDirector} onChange={this.updateDirectorValue} placeholder="Director"/>
          <input value={this.state.inputDescription} onChange={this.updateDescriptionValue} placeholder="Description"/>
          <input value={this.state.inputMetascore} onChange={this.updateMetascoreValue} placeholder="Metascore"/>
          <input value={this.state.inputStars} onChange={this.updateStarsValue} placeholder="Stars"/>
          <input value={this.state.inputUserRating} onChange={this.updateUserRatingValue} placeholder="User Rating"/>
          <button type="submit" onClick={this.addMovie}>Add</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { getMovies, addMovie })(AddMovie);
