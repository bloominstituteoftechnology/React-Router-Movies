import React from 'react';
import { getMovies } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return (
            <div className="outer-box">
                <ul className="list-box">
                    {this.props.movies.map((movie, i) => (
                        <Link to={{
                            pathname: `/movies/${movie.title.toLowerCase()}`,
                            state: {movie},
                            }}
                             key={i}><img alt={movie.title} className="small-img" src={movie.img} /></Link>
                    ))}
                </ul>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        return { movies: state.movies }
    }
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
        { getMovies }, 
        dispatch
        )
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Home);
