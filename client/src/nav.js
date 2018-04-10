import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div>
          
          <Nav>
        {this.state.movies.map(movie => (
            <NavItem>
          <Link to={'/Movie/' + movie.id}>{movie.title}</Link>
          <Route path={'/Movie/' + movie.id} component={Movie} />
            </NavItem>
        ))}
         </Nav>
      </div>
    );
  }
}