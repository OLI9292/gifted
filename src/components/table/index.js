import React, { PropTypes } from 'react';
import Rows from '../rows/index'


export default function Table (_, { rows, tables, onFetchTable }) {
  return (
    <div>
      <button type="button" 
        onClick={ e => { e.preventDefault(); onFetchTable('organizations') } }>
        Hello World
      </button>
      {rows.length > 0 &&
        <div>
          <Rows />
        </div>
      }
    </div>
  )
}

Table.contextTypes = {
  rows: PropTypes.array.isRequired,
  onFetchTable: PropTypes.func.isRequired
}
