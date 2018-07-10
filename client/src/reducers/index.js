import { SET_MOVIES, SET_MOVIE, SET_SAVED_MOVIES } from '../actions';

export default (state = { savedList: [], movies: [], movie: null }, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return Object.assign({}, state, { movies: action.payload });

        case SET_MOVIE:
            return Object.assign({}, state, { movie: action.payload });

        case SET_SAVED_MOVIES:
            const savedLists = state.savedList.slice();
            savedLists.push(action.payload);
            return Object.assign({}, state, { savedList: savedLists });

        default:
            return state;
    }
}