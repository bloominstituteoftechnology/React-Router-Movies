import { combineReducers } from 'redux';
import { GET_MOVIES, SELECT_MOVIE } from '../actions';

const movieReducer = ( movie = [], action) => {
	switch (action.type){
		case GET_MOVIES:
			return action.payload.data;
		default:
			return movie;
	}
}

const selectedMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.payload.data;
    default:
      return selectedMovie;
  }
};

const rootReducer = combineReducers({
	movie: movieReducer,
	selectedMovie: selectedMovieReducer
})

export default rootReducer;