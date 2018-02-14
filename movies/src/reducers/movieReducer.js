import { GET_MOVIE } from '../actions';

export const movieReducer = (movie = {}, action) => {
    switch(action.type) {
        case GET_MOVIE:
            return action.payload.data;
        default:
            return movie;
    }
};
