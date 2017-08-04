import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

class ViewDetails extends Component {
  componentDidMount() {
    this.props.selectMovie(this.props.match.params.id);
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{`${this.props.details.title}`}</h1>
        <p>{`director: ${this.props.details.director}`}</p>
        <p>{`metascore: ${this.props.details.metascore}`}</p>
        <p>{`stars: ${this.props.details.stars}`}</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}
export default connect(mapStateToProps, {selectMovie})(ViewDetails);