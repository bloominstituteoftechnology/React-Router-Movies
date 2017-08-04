import { GET_MOVIES, ADD_MOVIES } from '../actions';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
    console.log(action.payload.data);
      return action.payload.data;
    case ADD_MOVIES:
      return action.payload.data;
    default: 
      return state;
  }
};

export default moviesReducer;