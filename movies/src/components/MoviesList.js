import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMovies} from '../actions';
import {Link} from 'react-router-dom';


class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return (
            <div>
                {this.props.movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/movie/"+movie.id}>{movie.title} </Link>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};


export default connect(mapStateToProps, { getMovies })(MoviesList);