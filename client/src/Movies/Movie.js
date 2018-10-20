import React, {Component} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import withMovies from "../Containers/withMovies";

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(state => {
            if (!state.movie) return {movie: nextProps.data}
        })
    }


    render() {
        const {movie} = this.state;

        return !movie ? <div>Loading movie information...</div> : <MovieCard movie={movie} addToSavedList={this.props.addToSavedList}/>
    }
}

export default withMovies(Movie)
