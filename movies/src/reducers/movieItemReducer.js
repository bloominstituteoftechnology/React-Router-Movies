import { GET_MOVIEITEM } from '../actions'

export default (movie = {}, action) => {
    switch(action.type) {
        case GET_MOVIEITEM: 
            return action;
        default: 
            return movie;
    }
}