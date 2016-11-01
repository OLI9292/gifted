import React, { PropTypes } from 'react';
import block from 'bem-cn';
import '../../lib/css/fonts.css'
import './index.css'


export default function TopNav (_, {}) {
  const b = block('top-nav');

  return (
    <div className={b()}>
      <span className={b('dashboard')}>DASHBOARD</span>
      <span className={b('tables')}>TABLES</span>
      <span className={b('exports')}>EXPORTS</span>
      <span className={b('services')}>SERVICES</span>
    </div>
  )
}
