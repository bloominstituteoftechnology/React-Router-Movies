import React,{Component} from 'react';
import {getMovies} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Home.css'


class Home extends Component{
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return(
            <div>
                {this.props.movies.map(movie =>
                   <ul key={movie.id} >
                    <Link to= {`/movie/${movie.id}/`} className='Link'> {movie.title}</Link>
                   </ul>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log(state)
    return {
        movies:state.movies
    }
}
export default connect(mapStateToProps,{getMovies})(Home);