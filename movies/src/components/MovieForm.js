import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: []
    }
  }
  handleIdChange = (event) => {
    this.setState({
      id: event.target.value
    });
  };
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };
  handleDirectorChange = (event) => {
    this.setState({
      director: event.target.value
    });
  };
  handleMetascoreChange = (event) => {
    this.setState({
      metascore: event.target.value
    });
  };
  handleStarsChange = (event) => {
    this.setState({
      stars: event.target.value
    });
  };
  newMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      id: this.state.id,
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars
    };
    this.props.dispatch(addMovie(newMovie));
    this.setState({
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: []
    });
  };
  render() {
    return (
      <div class='container'>
        <div className="inputFields">
          <input value={this.state.id} onChange={this.handleIdChange} placeholder="ID" />	    
          <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
          <input value={this.state.director} onChange={this.handleDirectorChange} placeholder="Director" />
          <input value={this.state.metascore} onChange={this.handleMetascoreChange} placeholder="Metascore" />    
          <input value={this.state.stars} onChange={this.handleStarsChange} placeholder="Stars" /> 
    	  <button onClick={this.newMovie}>Add</button>
        </div>
      </div>
    );
  }
}

export default connect()(AddMovie);
