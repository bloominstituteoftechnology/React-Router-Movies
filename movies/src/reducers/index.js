import {GET_MOVIES,SET_MOVIE} from '../actions'
import {combineReducers} from 'redux'
const movieReducer =(movies=[],actions) => {
    switch (actions.type){
        case GET_MOVIES:
            return actions.payload.data;
        default:
            return movies;
    }
}
const selectMovieReducer = (setMovie = {}, action) => {
    switch (action.type) {
      case SET_MOVIE:
        return action.payload.data;
      default:
        return setMovie;
    }
  }
  
  const rootReducer = combineReducers({
    movies: movieReducer,
    setMovie: selectMovieReducer,
  });
  

export default rootReducer;