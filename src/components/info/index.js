import React, { PropTypes } from 'react';
import './index.css';
import block from 'bem-cn';

export default function Info ({page}, {}) {

  const b = block('info');


  return (
    <div className={b()}>
      <h1>{page.toUpperCase()}</h1>
    </div>
  )
}
