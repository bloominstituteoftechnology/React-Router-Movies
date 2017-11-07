import { Component } from "react";
import { fetchMovies, addMovie } from "../actions/movies";
import { connect } from "react-redux";

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return this.props.children(this.props.movies, this.props.addMovie);
  }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovies () {
      return dispatch(fetchMovies());
    },
    addMovie(movie) {
      return dispatch(addMovie(movie))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
