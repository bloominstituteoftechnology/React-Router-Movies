import { SELECTED_MOVIE } from '../actions';

const selectedMovie = (state = {id:undefined, title:undefined, director:undefined, metascore:undefined, stars:undefined}, action) => {
  switch(action.type) {
    case SELECTED_MOVIE:
    console.log(action.payload.data, "HEY ALL!");
      return action.payload.data;
    default: 
    console.log("HEY SEAN!", action.type);
      return state;
  }
};

export default selectedMovie;