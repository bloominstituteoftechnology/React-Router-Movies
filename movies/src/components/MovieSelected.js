import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { Panel, ProgressBar } from 'react-bootstrap';
import { Link } from  'react-router-dom';

class MovieDetail extends Component {
  componentDidMount() {
    this.props.selectMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.selectedMovie === null) return null;
    return (
      <div>
       <Panel header={this.props.selectedMovie.title}> 
	        <div>
            <span><b>Director:</b>
              <a href={`${wiki}${this.props.selectedMovie.director}`}>{this.props.selectedMovie.director}</a>
            </span>
          </div>

	        <span><b>Stars: </b>
            <a href={`${wiki}${this.props.selectedMovie.stars[0]}`}>{this.props.selectedMovie.stars[0]}</a>
            {`, `}
            <a href={`${wiki}${this.props.selectedMovie.stars[1]}`}>{this.props.selectedMovie.stars[1]}</a>
            {`, `}
            <a href={`${wiki}${this.props.selectedMovie.stars[2]}`}>{this.props.selectedMovie.stars[2]}</a>
	        </span>

	        <div>
            <span><b>MetaScore:</b> {this.props.selectedMovie.metascore}</span>
          </div>
        </Panel>
      </div>
    );
  }
}

const wiki = 'https://en.wikipedia.org/wiki/'

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieDetail);

//Need to Add Wikepedia Functionality