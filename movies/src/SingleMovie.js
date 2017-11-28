//SingleMovie
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleMovie } from './actions';

class SingleMovie extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleMovie(id);
  }
  render() {
    return (
       <div>
         <h1>{this.props.movie.director}</h1>
         Directed
         <h3>{this.props.movie.title}</h3>
         Starring:
         <ul>
           {this.props.movie.stars ?
           this.props.movie.stars.map(star => {
             return <li key={star}>{star}</li>;
         })
         : null}
       </ul>
    </div>
  );
 }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

export default connect(mapStateToProps, { getSingleMovie })(SingleMovie);
