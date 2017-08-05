import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';
// import MovieDetails from './MovieDetails';

import { Card, CardHeader, CardBlock, CardTitle, Row, Col } from 'reactstrap'

class ShowMovies extends Component {
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
                <Col md='4' xs='12' key={index}>
                  <Card block inverse color='primary'>
                    <CardHeader>Movie Title</CardHeader>
                    <CardBlock>
                      <CardTitle>
                        <Link to={`/movies/${movie.id}`} className='movies'>
                          {movie.title}
                        </Link>
                      </CardTitle>
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
