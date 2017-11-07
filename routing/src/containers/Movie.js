import { Component } from "react";
import { fetchMovie } from "../actions/movies";
import { connect } from "react-redux";

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }
  render() {
    return this.props.children(this.props.movie);
  }
}

const mapStateToProps = state => {
    return {
        movie: state.movie
    }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie (id) {
      return dispatch(fetchMovie(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
