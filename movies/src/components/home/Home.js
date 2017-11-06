import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import { NavLink } from 'react-router-dom';

class Home extends Component {

	componentDidMount() {
		this.props.getMovies();
	}

  render = () => {
    return (
    	<section className="home">
    		<div>
    			<h2>Our list of movies:</h2>
    			<div className="movie-list">
    				{
              Array.isArray(this.props.movies) &&
    					this.props.movies.map((movie, i) => {
    						return (
    							<NavLink
    								onClick={this.props.select}
    								className="list-movie" 
    								key={i}
    								data-index={i}
    								data-text={movie.title}
    								to="/Movie" 
    								exact>{movie.title}</NavLink>
    						);
    					})
    				}
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

export default connect(mapStateToProps, { getMovies })(Home);
