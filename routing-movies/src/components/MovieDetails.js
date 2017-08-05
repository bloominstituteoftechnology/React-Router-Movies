import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getId } from '../actions';

import { Card, CardHeader, CardBlock, CardTitle, Row, Col } from 'reactstrap'

class MovieDetails extends Component {

  componentDidMount() {
    this.props.getId(this.props.match.params.id);
  }

  render() {
    if (this.props.moviesId === null) return (
      <div>hello</div>
    )
    return (
      <div className='container'>
        <Row>
          <Col xs='12'>
          <center>
              <Card block inverse color='primary'>
                <CardHeader><h2>{this.props.moviesId.title}</h2></CardHeader>
                <CardBlock className="singlemovie">
                  {/* <CardTitle>{this.props.moviesId.title}</CardTitle> */}
                  <CardTitle className='text-left'> {`Director: ${this.props.moviesId.director}`}</CardTitle>
                  <CardTitle className='text-left'> {`Actors: ${this.props.moviesId.stars}`}</CardTitle>
                  <CardTitle className='text-left'> {`metascore: ${this.props.moviesId.metascore}`}</CardTitle>
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
