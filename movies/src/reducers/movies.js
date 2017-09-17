import {newState} from './helper'
import {
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE,
  GET_ALL_MOVIES
} from '../actions'

const initState = {
  list: [],
  selected: {}
}

export default (state = initState, {type, payload}) => {
  
  let list = [...state.list]
  let selected = {...state.selected}
  
  const setState = () => newState(state, {list, selected})

  switch (type) {

    case ADD_MOVIE:
      list.push(payload.movie)
      return setState()

    case UPDATE_MOVIE:
      list[payload.id] = payload.movie
      return setState()

    case DELETE_MOVIE:
      list.splice(payload.id, 1)
      return setState()

    case GET_MOVIE:
      selected =  payload.data
      return setState()

    case GET_ALL_MOVIES:
      list = payload.data
      return setState()

    default: return state
  }
}
