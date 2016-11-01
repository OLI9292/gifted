import React, { PropTypes } from 'react';
import Table from '../table/index';
import TopNav from '../top_nav/index';
import './index.css';
import block from 'bem-cn';

export default function MainLayout (_, {}) {
  const b = block('main-layout');

  return (
    <div className={b()}>
      <TopNav />
      <Table />
    </div>
  )
}
