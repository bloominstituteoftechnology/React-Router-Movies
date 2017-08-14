import { GET_MOVIE_INFO } from '../actions';

const initMovie = {
    id: 'undefined',
    title: 'undefined',
    director: 'underfined',
    metascore: 'undefined',
    stars: []
}

export default (selectedMovie = initMovie, action) => {
    switch(action.type) {
        case GET_MOVIE_INFO:
            return action.payload.data;
        default:
            return selectedMovie;
    }
};