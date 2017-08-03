import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getId } from '../actions';

import { Card, CardHeader, CardBlock, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

class MovieDetails extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.props.getId(this.props.params.id);
  }
  
  render() {
    if (this.props.moviesId === null) return null; 
    return (
      <div className='container'>
        <Row>
          <Col md='4' xs='12'>
            <Card block inverse color='primary'>
              <CardHeader>Movie</CardHeader>
              <CardBlock>
                <CardTitle>{this.props.moviesId.title}</CardTitle>
                <CardText> {`Director: ${this.props.moviesId.director}`}</CardText>
                <CardText> {`Actors: ${this.props.moviesId.stars}`}</CardText>
                <CardText> {`metascore: ${this.props.moviesId.metascore}`}</CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moviesId: state.moviesId,
  }
}

// const mapDispatchToProps = (state) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, { getId })(MovieDetails);
// export default ShowMovies;
