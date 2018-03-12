import React, { Component } from "react";

import axios from 'axios';

import './AddMovie.css';

class AddMovie extends Component {

  state = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  }

  handleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[name] = value;

    this.setState(newState);

  }

  handleSubmit = (event) => {
    event.preventDefault();

    const info = this.state;
    info.id = new Date().getTime();
    info.stars = info.stars.match(/(\w+(\s|))+/gi);
        
    const promise = axios.post('http://localhost:5000/api/movies', info);

    promise.then((response) => {

      alert("Movie Added");

    });
    

  }

  render() {

    return (
      <div className="AddMovie">
        <form onSubmit={ this.handleSubmit }>

          <input type="text" name="title" placeholder="Movie Title" value={ this.state.title } onChange={ this.handleInput } />
          <input type="text" name="director" placeholder="Director's Name" value={ this.state.director } onChange={ this.handleInput } />
          <input type="text" name="stars" placeholder="Cast/Crew (separated by comma)" value={ this.state.stars } onChange={ this.handleInput } />
          <input type="text" name="metascore" placeholder="Meta Score" value={ this.state.metascore } onChange={ this.handleInput } />

          <button type="submit">Add Movie</button>

        </form>
      </div>
    );

  }

}

export default AddMovie;