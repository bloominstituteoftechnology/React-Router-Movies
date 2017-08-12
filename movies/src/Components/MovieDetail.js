import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../Actions';

class MovieDetail extends Component {
    componentDidMount() {
        this.props.setSelectedMovie(this.props.match.params.id);
       //console.log(this.props);
      }
    
      render() {
       
          if (this.props.selectedMovie === null) return null;
         return (
            <div>
                <h1>in selectedMovies</h1>
                <h1>{this.props.movie}</h1> 
                {/* <h3>Director: {this.props.selectedMovie.director}</h3>
                <h3>MetaScore: {this.props.selectedMovie.metascore}</h3>
                <h3>Stars: {this.props.selectedMovie.stars}</h3> */}
            </div>
        );
   }
}


const mapStateToProps = (state) => {
    console.log(state.selectedMovie);
    return {
        
        selectedMovie: state.selectedMovie
    };
  };
  
  export default connect(mapStateToProps, { setSelectedMovie })(MovieDetail)
  

//   {
//     id: 0,
//     title: 'The Godfather',
//     director: 'Francis Ford Coppola',
//     metascore: 100,
//     stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
// },
// {