import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getSingleMovie} from '../actions/Movies';

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.movie.title}</li>
          <li>{this.props.movie.director}</li>
          <li>{this.props.movie.metascore}</li>
          {console.log('stars x', this.props.movie.stars && this.props.movie.stars[0])}
          {this.props.movie.stars && this.props.movie.stars.map((star, index) => <li key={index}>{star}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (param) => {
      axios.get(`http://localhost:5000/movies/${param}`)
        .then(response => dispatch(getSingleMovie(response.data)));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    movie: state.singleMovie
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);