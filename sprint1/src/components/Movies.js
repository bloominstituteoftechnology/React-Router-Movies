import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const apiLocation = "http://localhost:5000/api/movies";
        axios.get(apiLocation)
            .then(res => {
                console.log(res);
                const films = res.data;
                this.setState({ movies: films });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <div>All Movies Titles</div>
                <div>for each map to movie file</div>
                <ul>
                    {this.state.movies.map(item =>
                    <Link to = {`/$[this.state.id}`} key = {item.id}>{item.title}</Link>
                    )}
                </ul>
            </div>
        );
    }
}

export default Movies;