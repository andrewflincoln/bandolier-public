import {GET_USERS} from '../actions.users'

export function user(state = [], action) {
  switch(action.type) {
    case GET_USERS:
      return action.payload
    default: return state
  }
}