const moviesReducer = (movieData = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.payload.data;
        default:
            return movieData;
    }
};

export default moviesReducer;