import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getId } from '../actions';

import { Card, CardHeader, CardBlock, CardTitle, CardText, Row, Col } from 'reactstrap'

class MovieDetails extends Component {

  componentDidMount() {
    this.props.getId(this.props.match.params.id);
    console.log(this.props)

  }

  render() {
    console.log(this.props)
    if (this.props.moviesId === null) return (
      <div>hello</div>
    )
    return (
      <div className='container'>
        <Row>
          <Col xs='12'>
          <center>
              <Card block inverse color='primary'>
                <CardHeader class="singlemovie">Movie</CardHeader>
                <CardBlock class="singlemovie">
                  <CardTitle>{this.props.moviesId.title}</CardTitle>
                  <CardTitle> {`Director: ${this.props.moviesId.director}`}</CardTitle>
                  <CardTitle> {`Actors: ${this.props.moviesId.stars}`}</CardTitle>
                  <CardTitle> {`metascore: ${this.props.moviesId.metascore}`}</CardTitle>
                </CardBlock>
              </Card>
            </center>
          </Col>
        </Row> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moviesId: state.moviesId,
  }
}

export default connect(mapStateToProps, { getId })(MovieDetails);
// export default ShowMovies;
