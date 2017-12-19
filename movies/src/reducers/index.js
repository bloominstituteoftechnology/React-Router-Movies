import {GET_MOVIES} from '../actions'

const movieReducer =(movies=[],actions) => {
    switch (actions.type){
        case GET_MOVIES:
            return actions.payload.data;
            
        default:
            return movies;
    }
}

export default movieReducer;