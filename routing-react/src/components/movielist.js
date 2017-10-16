import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import '../App.css';
import { withRouter } from 'react-router-dom'

class Movies extends Component {
    constructor(props) {
        super();
        this.state = {
            currentID: null
        }
    }

    componentDidMount(){
        console.log("mounting now")
        this.props.getMovies();
    }

    render() {
        console.log(this.props.movies, "this.props.movies")
        return (
            <div>
                <h1>Movies</h1>
                    <div className='movies'>
                        {this.props.movies[0] && this.props.movies.map((movie, i) => {
                            return (
                                <div key={i}>
                                    <Link to={`/movies/${i}`} className="movie" key={i}>{movie.title}</Link>
                                </div>
                        )})}
                    </div>
                                                                 
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        movies: state
    };
};

export default withRouter(connect(mapStateToProps, { getMovies })(Movies));