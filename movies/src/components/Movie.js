//movie
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoviesById } from '../actions';

class Movie extends Component {
  constructor(props) {
  super(props);
  }
  componentDidMount() {
    this.props.getMoviesById(this.props.match.params.id);
  }
  render() {
    if (this.props.movies === null) {
      return <h1>This is a problem!</h1>;
    }
    if (this.props.moves === undefined) {
      return <h1>This too is a problem!!!</h1>
    }
    return (
      <div key={this.props.movies.id}>
        <h1>{`Title: ${this.props.movies.title}`}</h1>
        <p>{`Director: ${this.props.movies.director}`}</p>
        <p>{`Metascore: ${this.props.movies.metascore}`}</p>
        <p>{`Stars: ${this.props.movies.stars}`}</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMoviesById })(Movie);
