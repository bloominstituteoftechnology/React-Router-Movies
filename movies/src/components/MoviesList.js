import React, { Component } from 'react';
import { getMovies } from '../actions';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, Container, ListGroup, ListGroupItem } from 'reactstrap';

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  
  render() {
    return (
      <Container>
        <h1> Movies </h1>
        <ListGroup>
          {this.props.movies.map((movie, i) => {
            return (
              <ListGroupItem key={i}>
                <Nav vertical>
                  <NavItem>
                    <NavLink href={`/movies/${movie.id}`}>{movie.title}</NavLink>
                  </NavItem>
                </Nav>
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <Nav vertical>
          <NavItem>
            <NavLink href="/new-movie">Add new movie</NavLink>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);