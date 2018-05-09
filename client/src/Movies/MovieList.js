import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

//This was already here and I didn't do anything with it. I think this is pretty boilerplate and appears in many react documents. This is making sure the movies array is empty before we start pushing data into it.

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

  //Not clear on this part at all. But it was already there and it worked so I didn't stress over it. It looks like what it's supposed to do is get the data from the api and set it into state. Assuming that the component has mounted. I don't think this runs until after mounting. I understand that mounting triggers the "lifecycle" and puts the component into the DOM. But I'm not clear on whether this ever needs to be unmounted (probably not, since it works fine without unmounting) and if not, why not?

  //Also, if you don't have the error part, does the whole thing break? Is this just one of those things that's a good practice, like not using your original variable for anything?

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
	  <Link to={`/movies/${movie.id}`}>
	    <MovieCard key={movie.id} movie={movie} />
	  </Link>
        ))}
      </div>
    );
  }
}

// I am pretty sure that the only thing I changed about this document was in the render. I totally stole the map function from other assignments since you need it to iterate over how ever many data items you're pulling. The Link was a little tricky - I got some help with the `` since I forgot about them.
