import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            events: '',
        };
    }
    componentDidMount() {
        const apiLocation = "https://localhost:5005/api/movies";
        axios.get(apiLocation).then(response => {
            this.setState({ events: response.data });
          });
          console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>All Movies Titles</div>
                <div>for each map to movie file</div>
            </div>
        );
    }
}

export default Movies;