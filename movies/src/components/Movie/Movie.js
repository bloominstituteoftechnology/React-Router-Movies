import React from 'react';
import {getMovies} from '../../actions';
import {connect} from 'react-redux';

function Movie(props) {
    
    return (
        <div>
        {props.movies.map(movie =>
            movie.id.toString() === props.match.params.id?
            <ul key={movie.id}>
               <li> {movie.title}</li>
                <li>{movie.director}</li>
                <li>{movie.metascore}</li>
            </ul>:null
        )
        }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        movies:state
    }
}
export default connect(mapStateToProps,{getMovies})(Movie);

