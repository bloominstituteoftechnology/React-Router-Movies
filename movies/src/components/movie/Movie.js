import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../actions';

class Movie extends Component {

	componentDidMount() {
		this.props.getMovie(this.props.index);
	}

	render = () => {
    return (
    	<section className="movie-page">
    		<div>
    			<h2>{this.props.movies.title}</h2>
    			<h4>Director: {this.props.movies.director}</h4>
    			<div className="stars">
    				{
    					this.props.movies.stars !== undefined &&
    					this.props.movies.stars.map((star, i) => {
    						return <div className="star" key={i}>{star}</div>
    					})
    				}
    			</div>
    			<div 
    				className="score">
    					Scored {this.props.movies.metascore !== undefined && 
    					this.props.movies.metascore} / 100
    			</div>
    		</div>
    	</section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state
  };
};

export default connect(mapStateToProps, { getMovie })(Movie);
