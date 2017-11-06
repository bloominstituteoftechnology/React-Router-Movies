import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../actions';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "movie-page"
    }
  }

  componentDidMount() {
    this.props.getMovie(this.props.index);
    setTimeout(() => { this.setState({classes: "movie-page movie-page-show"}) }, 100);
  }

  componentWillUnmount() {
    this.setState({classes: "movie-page"});
  }

	render = () => {
    return (
    	<section className={this.state.classes}>
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
