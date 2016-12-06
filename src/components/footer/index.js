import React, { PropTypes } from 'react';
import './index.css';
import { route } from '../../lib/js/utils';
import block from 'bem-cn';

export default function Footer (_, {}) {
  const b = block('footer');

  return (
    <div className={b()}>
      <ul className={b('links')}>
        <li><a href="#/services">Services</a></li>
        <li><a href="#/philosophy">Philosophy</a></li>
        <li><a href="#/history">History</a></li>
        <li><a href="#/book">Book a Session</a></li>
      </ul>
      <div className={b('established')}>
        <p>New York, NY</p>
        <p>Est. 2016</p>
      </div>
    </div>
  )
}
