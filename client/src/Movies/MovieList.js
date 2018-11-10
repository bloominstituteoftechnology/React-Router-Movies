import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  heading: {
    margin: '30px auto',
    textAlign: 'center'
  }
}

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {

    const { classes } = this.props;
    // <MovieDetails key={movie.id} movie={movie} />

    return (
      <div>
        <Typography className={classes.heading} variant='h3'>Movie List</Typography>
        <div className="movie-list">
          {this.state.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MovieList);
