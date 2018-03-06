import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            movies: null
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/movies")
            .then((res) => {
                this.setState({ movies: res.data});
                console.log(this.state.movies);
            })
            .catch((err) => console.log(err));
    }

    render(){
        return (
            <div>
                <h1>Movies!</h1>
                {this.state.movies ? this.state.movies.map((movie, i) => {
                    return(
                        <div key={i}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </div>
                    );
                }) : null}
            </div>
        );        
    }
}

export default Home;