import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Container, Row } from 'reactstrap';
import { getAllMovies } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    const { movies = [] } = this.props;

    return (
      <Container>
        <Row className="justify-content-center">
          <h1 className="display-3">Movies</h1>
        </Row>
        <ListGroup>
          {movies.map((movie, i) => {
            return (
              <ListGroupItem key={i} tag="button" action>
                <Link to={`/${movie.id}`} key={i}>{movie.title}</Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getAllMovies })(Home);
