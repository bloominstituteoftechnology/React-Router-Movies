import React from 'react';
import { SELECTED_MOVIE } from '../actions';

export const selectedMovieReducer = (state = {id:undefined, title:undefined, director:undefined, metascore:undefined, stars:undefined}, action) => {
  switch(action.type) {
    case SELECTED_MOVIE:
      return action.payload.data;
    default: 
      return state;
  }
};