import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import { bindActionCreators } from 'redux';

class NewMovie extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      director: '',
      metascore: '',
      stars: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const starsArr = this.state.stars.split(' ');
    const movie = {
      stars: starsArr,
      id: this.props.movies.length,
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore
    };
    this.props.addMovie(movie);
    this.setState({
      title: '',
      director: '',
      metascore: '',
      stars: '',
    });
  }
  titleValue = (e) => {
    this.setState({ title: e.target.value });
  }
  directorValue = (e) => {
    this.setState({ director: e.target.value });
  }
  metascoreValue = (e) => {
    this.setState({ metascore: e.target.value });
  }
  starsValue = (e) => {
    this.setState({ stars: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="title" value={this.state.title} onChange={this.titleValue} />
        <input type="text" placeholder="director" value={this.state.director} onChange={this.directorValue} />
        <input type="text" placeholder="metascore" value={this.state.metascore} onChange={this.metascoreValue} />
        <input type="text" placeholder="stars (separated by spaces)" value={this.state.stars} onChange={this.starsValue} />
        <input type="button" value="add movie" onClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
