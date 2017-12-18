import { MOVIES } from '..constants';

function Search(state = [], action) {
    switch(action.type) {
        case MOVIES:
            console.log("Movies are ", action.items);
            return action.items;
        case MOVIE:
            console.log("Movie title selected ", action.items.id);
            return action.items.id;
        default:
            return state;
    }
}
export default Search;