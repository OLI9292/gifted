export const UPDATE_TABLE = 'UPDATE_TABLE'
export const SELECT_TABLE = 'SELECT_TABLE'


export function selectTable(table) {
  return {
    type: SELECT_REDDIT,
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
