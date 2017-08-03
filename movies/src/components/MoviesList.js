import React from 'react';
import { getMovies } from '../actions';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.movies.map((movies, i) => {
                        return (
                            <div key={i}>
                                {/* <p>{`id ${movies.id}`}</p> */}
                                <Link to={`/movies/${movies.id}`}>{`${movies.title}`}</Link>
                                {/* <p>{`Director: ${movies.director}`}</p>
                                <p>{`Metascore: ${movies.metascore}`}</p>
                                <p>{`Stars: ${movies.stars}`}</p> */}


{/* return <Link style={linkStyles} to={`/friends/${friend.toLowerCase()}`} key={friend}> {friend} </Link>; */}

                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);
