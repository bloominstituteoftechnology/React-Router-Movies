import React, {Component} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import withMovies from "../Containers/withMovies";

class Movie extends Component {
    constructor(props) {
        super(props);
console.log(props);
        this.state = {
            movie: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(state => {
            if (!state.movie) return {movie: nextProps.data}
        })
    }


    saveMovie = () => {
        const addToSavedList = this.props.addToSavedList;
        addToSavedList(this.state.movie)
    }

    render() {
        const {movie} = this.state;

        return !movie ? <div>Loading movie information...</div> : <MovieCard movie={movie} addToSavedList={this.props.addToSavedList}/>
    }
}

export default withMovies(Movie)
