import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addMovie, getAllMovies } from '../actions';
import { Form, FormGroup, Label, Button, Input, Container, Row } from 'reactstrap';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {id: '', title: '', director: '', metascore: '', stars: [], redirect: false};
  }

  componentDidMount() {
    this.props.getAllMovies().then(() => {
      this.setState({id: this.props.movies[this.props.movies.length - 1].id + 1});
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addMovie(this.state);
    e.target.reset();
    this.setState({id: '', title: '', director: '', metascore: '', stars: [], redirect: true});
  }

  handleChange = (e) => {
    const target = e.target;

    if (target.name === 'stars') {
      this.setState({[target.name]: target.value.split('\n')});
    } else {
      this.setState({[target.name]: target.value});
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <Container>
        <Row>
          <Link to="/">Home</Link>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input value={this.state.title} onChange={this.handleChange} type="text" name="title" id="title" placeholder="Title..." />
          </FormGroup>
          <FormGroup>
            <Label for="director">Directed By</Label>
            <Input value={this.state.director} onChange={this.handleChange} type="text" name="director" id="director" placeholder="Director..." />
          </FormGroup>
          <FormGroup>
            <Label for="metascore">Metascore</Label>
            <Input value={this.state.metascore} onChange={this.handleChange} type="number" name="metascore" id="metascore" />
          </FormGroup>
          <FormGroup>
            <Label for="stars">Starring</Label>
            <Input onChange={this.handleChange} type="textarea" name="stars" id="stars" placeholder="Starring..." />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { addMovie, getAllMovies })(AddMovie);
