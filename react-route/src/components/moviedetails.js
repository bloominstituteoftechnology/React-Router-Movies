import React, { Component } from 'react';
import axios from 'axios';


class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            director: '',
            metascore: 0,
            stars: []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/api${this.props.location.pathname}`)
            .then((res) => {
                this.setState({
                    title: res.data.title,
                    director: res.data.director,
                    metascore: res.data.metascore,
                    stars: res.data.stars
                });
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }
    
    render(){
        return (
            <div>
                <p>Title: {this.state.title}</p>
                <p>Director: {this.state.director}</p>
                <p>metascore: {this.state.metascore}</p>
                <p>Stars: {this.state.stars.map((star) => `${star}, `)}</p>
            </div>
        );
    }
}

export default MovieDetails;