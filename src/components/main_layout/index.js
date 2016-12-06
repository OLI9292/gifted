import React, { PropTypes } from 'react';
import Splash from '../splash/index';
import Info from '../info/index';
import Service from '../service/index';
import Footer from '../footer/index';
import './index.css';
import { route } from '../../lib/js/utils';
import block from 'bem-cn';

export default function MainLayout (_, {}) {
  const b = block('main-layout');

  const content = () => {
    if (route(location) === 'splash')
    {
      return <Splash />
    } 
    else if (route(location) === 'service')
    {
      return <Service service={location.hash.split('/')[2]} />
    }
    else if (route(location) === 'info')
    {
      return <Info page={location.hash.split('/')[1]} />
    }
  }

  return (
    <div className={b()}>
      {content()}
      <Footer />
    </div>
  )
}
