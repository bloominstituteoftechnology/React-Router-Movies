import { SET_MOVIES } from '../actions';

export default (state = { movies: [] }, action) => {
    switch (action.type) {
        case SET_MOVIES:
            console.log('Setting Movies');
            return Object.assign({}, state, { movies: action.payload });

        default:
            return state;
    }
}