import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {

  },
  saveBtn: {
    width: '150px'
  }
}

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  saveMovie = () => {
    const { movie } = this.state;
    const { addToSavedList, savedList} = this.props;

    console.log(savedList);

    addToSavedList(movie);
  }

  render() {

    const { classes } = this.props;

    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
       <MovieCard movie = {this.state.movie} />
       <Button className={classes.saveBtn} color='primary' variant='contained' onClick={this.saveMovie}>Save Movie</Button>
      </div>
    );
  }
}

export default withStyles(styles)(Movie);
