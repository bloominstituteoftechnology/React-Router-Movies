import * as Actions from '../actions'

export default (state =[], action) => {
    switch(action.type) {
        case Actions.GET_MOVIES:
        case Actions.ADD_MOVIE:
            return action.payload.data
        default:
            return state
    }
}