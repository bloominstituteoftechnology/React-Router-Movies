import React, { Component } from 'react';
import { getMovie } from '../actions';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, Card, CardText, CardTitle, Container, Row, Col } from 'reactstrap';

class Movie extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return (
      <Container>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
        <Row>
          <Col>
            <Card>
              <CardTitle>{this.props.movie.title}</CardTitle>
              <hr />
              <CardText>Directed by {this.props.movie.director}</CardText>
              <CardText>Metascore of {this.props.movie.metascore}</CardText>
              <CardText>Starring: {this.props.movie.stars}</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  };
};

export default connect(mapStateToProps, { getMovie })(Movie);