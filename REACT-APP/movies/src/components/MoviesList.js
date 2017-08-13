import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import './MoviesList.css'

class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return(
            <div>
                <Panel className="panel" header="Movies List" bsStyle="primary">
                    <div className="panel_body">
                        <ul>
                            {this.props.movies.map((movie, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${movie.id}`}>
                                            {movie.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Panel> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { getMovies })(MoviesList);