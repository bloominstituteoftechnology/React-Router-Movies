import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import { getMovie } from '../actions';

class Movie extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    const {director, title, metascore, stars = []} = this.props.movie;
    return (
      <Container>
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/new-movie">Add a Movie</NavLink>
          </NavItem>
        </Nav>
        <h1>{title}</h1>
        <h3>Directed By: {director}</h3>
        <h3>Starring: {stars.map((star, i) => {
          if (i === stars.length - 1) {
            return <span key={i}>{star}</span>;
          }
          return <span key={i}>{star}, </span>;
        })}</h3>
        <h3>Metascore: {metascore}</h3>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  };
};

export default connect(mapStateToProps, {getMovie})(Movie);
