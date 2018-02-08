import { showMovies } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case showMovies:
            console.log("Movies are ", action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
};
