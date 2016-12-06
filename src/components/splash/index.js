import React, { PropTypes } from 'react';
import './index.css';
import Service from '../service/index';
import block from 'bem-cn';

export default function Splash (_, {}) {
  
  const b = block('splash');

  const services = [
    { name: 'media literacy' },
    { name: 'data analysis' },
    { name: 'design' },
    { name: 'code' }
   ];

  return (
    <div className={b()}>
      <h1>CREATE</h1>
      <h4>A tutoring company teaching kids 21st century job skills</h4>
      <div className={b('services')}>
      {
        services.map((service, i) => 
          <a href={`#/service/${service.name}`}>
            <div className={b('service')} key={i}>
              {service.name}
            </div>
          </a>
        )
      }
      </div>
    </div>
  )
}
