import React, {Component} from 'react';
import axios from "axios/index";

function withMovies(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                movies: []
            };

            this.query = props.match.params.id
        }

        componentDidMount() {
            axios
                .get(`http://localhost:5000/api/movies/${this.query ? this.query : ''}`)
                .then(response => {
                    this.setState({movies: response.data});
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        render() {
            return <WrappedComponent data={this.state.movies} {...this.props} />;
        }
    };
}

export default withMovies