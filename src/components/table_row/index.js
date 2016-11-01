import React, { PropTypes } from 'react';
import block from 'bem-cn';

export default function TableRow({ data }, context) {
  const b = block('artwork-list-item');

  return (
    <div className={b()}>
      {data.name}
    </div>
  )
}

TableRow.propTypes = {
  data: PropTypes.object.isRequired,
};