import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../actions';

class MovieDetail extends Component {
  // taking the functions that react says components have
  componentDidMount() {
    this.props.setSelectedMovie(this.props.match.params.id);
  }
  // 

  render() {
    if (this.props.selectedMovie === null) return null;
    return (
      <div>
        <h1>{this.props.selectedMovie.title}</h1>
        <h3>MetaScore: {this.props.selectedMovie.metascore}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { setSelectedMovie })(MovieDetail);
// connect grabs data from the store for us.
// connect is a function that returns a function
// the name of the component is in the second set of parenthesis ALWAYS
// map state to props is how you get info from the redux store into your componenent
// state refers to all of the stuff that we have saved on the redux object(store)
// we want to get the state of selected movie into our props