import { MOVIES } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case MOVIES:
            console.log("Movies are ", action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
};
