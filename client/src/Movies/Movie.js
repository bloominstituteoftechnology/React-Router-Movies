import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import addToSavedList from '../App';
import SavedList from "./SavedList";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      SavedList: SavedList,
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    console.log(id);
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

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.state.movie;
    console.log(this.state.SavedList);
    this.setState({
      SavedList: [...this.state.SavedList, addToSavedList]
    });
    console.log(this.state.SavedList)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div>
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    );
  }
}
