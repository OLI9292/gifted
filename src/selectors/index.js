import { PropTypes } from 'react'

export const selectedTable = state => state.selectedTable
selectedTable.propType = PropTypes.string.isRequired

export const tables = state => state.tables
tables.propType = PropTypes.object.isRequired

export const rows = state => {
  const r = state.tables[selectedTable(state)]
  return r && r.items ? r.items : []
}
rows.propType = PropTypes.array.isRequired
