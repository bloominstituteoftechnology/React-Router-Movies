import { Component } from "react";
import { fetchMovies } from "../actions/movies";
import { connect } from "react-redux";

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return this.props.children(this.props.movies);
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
