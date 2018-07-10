import { SET_MOVIES, SET_MOVIE } from '../actions';

export default (state = { movies: [], movie: null }, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return Object.assign({}, state, { movies: action.payload });

        case SET_MOVIE:
            return Object.assign({}, state, { movie: action.payload });

        default:
            return state;
    }
}