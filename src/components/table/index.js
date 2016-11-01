import React, { PropTypes } from 'react';
import TableRow from '../table_row/index';
import TableSidebar from '../table_sidebar/index';
import block from 'bem-cn';

export default function Table (_, { rows, tables, onFetchTable }) {
  const b = block('table-layout');
  return (
    <div className={b()}>
      <TableSidebar />
      {
        rows.length > 0 &&
        <div>
          { rows.map((row, i) => <TableRow key={i} data={row} />) }
        </div>
      }
    </div>
  )
}

Table.contextTypes = {
  rows: PropTypes.array.isRequired
}
