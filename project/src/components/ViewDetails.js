import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewDetails extends Component {
  render() {
    return (
      <div>
        <h1>{`${object.title}`}</h1>
        <p>{`director: ${object.director}`}</p>
        <p>{`metascore: ${object.metascore}`}</p>
        <p>{`stars: ${object.stars}`}</p>
      </div>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}
export default connect(mapStateToProps)(ViewDetails)