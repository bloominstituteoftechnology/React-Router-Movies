import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
// import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} style={{textDecoration: 'none'}}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    );
  }
}

