import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieItem } from '../actions';

class MovieItem extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieItem(id);
    }

    render() {
        return (
            <ul> 
                <li> 
                {this.props.movie.title}
                </li>
            </ul>
        );
    }
}

const stataMapToProps = (state) => {
    return {
        movie: state.movie
    };
};

export default connect(stataMapToProps, { getMovieItem })(MovieItem);