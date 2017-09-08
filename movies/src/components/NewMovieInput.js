import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import {  } from '../actions';

class NewMovieInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: [],
    };
  }


  handleIDChange = (e) => {
      this.setState({
          id: this.props.movies.length
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

    handleDirectorChange = (e) => {
        this.setState({
          director: e.target.value
      });
    };

    handleMetascoreChange = (e) => {
        this.setState({
          metascore: e.target.value
      });
    };

     handleStarsChange = (e) => {
        this.setState({
            stars: e.target.value
      });
    };

   

    newMovie = (e) => {
        e.preventDefault();
        const newMovie = {
            id: this.props.movies.length,
            director: this.state.director,
            title: this.state.title,
            metascore: this.state.metascore,
            stars: this.state.stars,
        };
        this.props.dispatch(NewMovieInput(newMovie));
        this.setState({
            director: '',
            title: '',
            metascore: '',
            stars: [],
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                <input value={this.state.director} onChange={this.handleDirectorChange} placeholder="Director" />
                <input value={this.state.metascore} onChange={this.handleMetascoreChange} placeholder="Metascore" />
                <input value={this.state.stars} onChange={this.handleStarsChange} placeholder="Star 1, Star 2, etc" />
                <button onClick={this.newMovie}>Add</button>
                <p> </p>
                <div><Link to={`/`}> <button>Home</button></Link></div>
                
            </div>
        );
    }
}

export default connect()(NewMovieInput);
