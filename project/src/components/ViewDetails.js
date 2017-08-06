import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import '../App.css';

class ViewDetails extends Component {
  componentWillMount(props) {
    this.props.selectMovie(this.props.match.params.id);
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="details">
        <h1>{`${this.props.details.title}`}</h1>
        <p>{`Directed By: ${this.props.details.director}`}</p>
        <p>{`Metascore: ${this.props.details.metascore}`}</p>
        <p>{`Starring: ${this.props.details.stars}`}</p>
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