import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import { Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: [],
    };
  }

  handleChangeID = (e) => {
    this.setState({
      id: e.target.value
    });
  };

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleChangeDirector = (e) => {
    this.setState({
      director: e.target.value
    });
  };

  handleChangeMetascore = (e) => {
    this.setState({
      metascore: e.target.value
    });
  };

  handleChangeStars = (e) => {
    this.setState({
      stars: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: this.state.id,
      director: this.state.director,
      title: this.state.title,
      metascore: this.state.metascore,
      stars: this.state.stars,
    };
    this.props.addMovie(newMovie);
    this.setState({
      id: '',
      director: '',
      title: '',
      metascore: '',
      stars: [],
    });
  };

  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav> 
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="movieID">ID</Label>
            <Input type="text" name="movieID" id="movieID" placeholder="ID" value={this.state.id} onChange={this.handleChangeID}/>
          </FormGroup>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
          </FormGroup>
          <FormGroup>
            <Label for="director">Director</Label>
            <Input type="text" name="director" id="director" placeholder="Director" value={this.state.director} onChange={this.handleChangeDirector} />
          </FormGroup>
          <FormGroup>
            <Label for="metascore">Metascore</Label>
            <Input type="text" name="metascore" id="metascore" placeholder="Metascore" value={this.state.metascore} onChange={this.handleChangeMetascore} />
          </FormGroup>
          <FormGroup>
            <Label for="movieID">Stars</Label>
            <Input type="text" name="stars" id="stars" placeholder="Stars" value={this.state.stars} onChange={this.handleChangeStars}/>
          </FormGroup>
          <Button color="primary" type='submit'>Add Movie</Button>
        </Form>
      </Container>
    );
  }
}

export default connect( null, { addMovie } )(AddMovie);
