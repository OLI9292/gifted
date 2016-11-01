import React, { PropTypes } from 'react';
import './index.css';
import { snakeCase } from '../../lib/js/utils';
import block from 'bem-cn';

export default function TableSidebar (_, { onSelectTable }) {

  const primaryTables = ['Organizations', 'Artists', 'Clearbit Profiles']
  const b = block('table-sidebar');

  return (
    <div className={b()}>
      <div>
        {
          primaryTables.map((tableName, i) => 
            <div className={b('table-name')} key={i}
              onClick={ e => { onSelectTable(snakeCase(tableName)) } }>
              {tableName}
            </div>)
        }
      </div>
    </div>
  )
}

TableSidebar.contextTypes = {
  onSelectTable: PropTypes.func.isRequired
}
