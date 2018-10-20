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


    // Uncomment this code when you're ready for the stretch problems
    //

    // saveMovie = () => {
    //   const addToSavedList = this.props.addToSavedList;
    //   addToSavedList(this.state.movie)
    // }

    render() {
        const {movie} = this.state;

        return !movie ? <div>Loading movie information...</div> : <MovieCard movie={movie}/>
    }
}

export default withMovies(Movie)
