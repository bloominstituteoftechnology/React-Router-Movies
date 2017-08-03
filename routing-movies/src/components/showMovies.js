import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Route, Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

import { Card, CardHeader, CardBlock, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

class ShowMovies extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div className='container'>
        <Row>
          {
            this.props.movies.map((movie, index) => {
              return (

                  <Col md='4' xs='12'>
                    <Card block inverse color='primary'>
                      <CardHeader>Movie</CardHeader>
                      <CardBlock>
                        <CardTitle>
                          <Link to ={`/movies/${movie.id}`} component={MovieDetails}>
                            {movie.title}
                          </Link>
                        </CardTitle>
{/*                        <CardText> {`Director: ${movie.director}`}</CardText>
                        <CardText> {`Actors: ${movie.stars}`}</CardText>
                        <CardText> {`metascore: ${movie.metascore}`}</CardText>  */}
                      </CardBlock>
                    </Card>
                  </Col>


              )
            })
          }
          </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

// const mapDispatchToProps = (state) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, { getMovies })(ShowMovies);
// export default ShowMovies;
