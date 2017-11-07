import * as Actions from '../actions'

export default (state ={}, action) => {
    console.log('movie reducer action.payload',action.payload)
    switch(action.type) {
        case Actions.GET_MOVIE:
            return action.payload.data
        default:
            return state
    }
}