import Redux from 'redux';
export default const GET_MOVIES = 'GET_MOVIES';
import Axios from 'axios';

const initialState = {
    movies: {
        id: " ",
        title: " ", 
        director: " ",

    }
};

const getMovie = (state = initialState, action) => {
 switch (action.type) {
     case GET_MOVIES:
     return action.payload.value; 
     default: 
     return movies;
 };
}

const apiUrl = 'http://localhost:5000/api/movies';
const axios.get(apiUrl, movies)