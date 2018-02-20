import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';

class MovieList extends Component {

	componentDidMount(){
		this.props.getMovies();
	}

  render() {
    return (
      <div>
      <h1>Movies</h1>
      <small>Click for more info</small>

      <br/> <br/> 

        {this.props.movie.map((movie, i) => {
          return (
            <div key={i}>
             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
};

export default connect(mapStateToProps, { getMovies })(MovieList);