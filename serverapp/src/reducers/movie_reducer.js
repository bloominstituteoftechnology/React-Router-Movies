import { MOVIE } from '../actions';

 export default (movie = null, action) => {
     switch (action.type) {
        case MOVIE:
            console.log("You selected ", action.payload.data);
            return action.payload.data;
        default:
        return movie;
     };
 };