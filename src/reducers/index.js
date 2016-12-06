import { combineReducers } from 'redux'
import {
  UPDATE_TABLE, SELECT_TABLE, SELECT_SERVICE, CHANGE_MAIN
} from '../actions'

function selectedService(state = '', action) {
  switch (action.type) {
  case 'SELECT_SERVICE':
    return action.name
  default:
    return state
  }
}

function changeMain(state = '', action) {
  switch (action.type) {
  case 'CHANGE_MAIN':
    return action.main
  default:
    return state
  }
}

function tables(state = {}, action) {
  switch (action.type) {
  case 'UPDATE_TABLE':
    return Object.assign({}, state, {
      [action.table] : rows(state[action.table], action)
    })
  default:
    return state
  }
}

const reducers = combineReducers({
  selectedService,
  changeMain,
  tables
})

export default reducers
