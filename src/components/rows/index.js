import React, { PropTypes } from 'react'


export default function Rows(_, { rows }) {
  return (
    <ul>
      { rows.map((row, i) =>
        <li key={ i }>{ row.name }</li>
      )}
    </ul>
  )
}

Rows.contextTypes = {
  rows: PropTypes.array.isRequired
}