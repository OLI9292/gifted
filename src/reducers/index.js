import { combineReducers } from 'redux'
import {
  UPDATE_TABLE, SELECT_TABLE
} from '../actions'

function selectedTable(state = '', action) {
  switch (action.type) {
  case 'SELECT_TABLE':
    return action.table
  default:
    return state
  }
}

function rows(state = { items: [] }, action) {
  switch (action.type) {
    case 'UPDATE_TABLE':
      return Object.assign({}, state, {
        items: action.data
      })
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

const rootReducer = combineReducers({
  selectedTable,
  tables
})

export default rootReducer
