export const UPDATE_TABLE = 'UPDATE_TABLE'
export const SELECT_TABLE = 'SELECT_TABLE'
export const SELECT_SERVICE = 'SELECT_SERVICE'
export const CHANGE_MAIN = 'CHANGE_MAIN'

export function selectTable(table) {
  return {
    type: SELECT_TABLE,
    table
  }
}

export function updateTable(table, data) {
  return {
    type: UPDATE_TABLE,
    table,
    data
  }
}

export function selectService(name) {
  return {
    type: SELECT_SERVICE,
    name
  }
}

export function changeMain(main) {
  return {
    type: CHANGE_MAIN,
    main
  }
}
