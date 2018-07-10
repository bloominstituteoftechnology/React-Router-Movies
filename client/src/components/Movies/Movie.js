import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import { setMovie } from '../../actions';

class Movie extends Component {
  componentDidMount() {
    // change this line to grab the id passed on the URL

    let { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  componentWillUnmount() {
    this.props.setMovie(null);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.props.setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.props.movie)
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.props.movie} />
        <div onClick={() => this.saveMovie()} className='save-button'>
          Save
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps, { setMovie })(Movie);
