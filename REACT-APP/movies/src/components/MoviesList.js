import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';

class MoviesList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return(
            <div>
                <h1>Movies</h1>
            </div>
            // <ul>
            //     {this.props.movies.map((movie, index) => {
            //         return (
            //             <li key={index}>{movie.title}</li>
            //         );
            //     })}
            // </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { getMovies })(MoviesList);