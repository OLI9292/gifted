import React, { PropTypes } from 'react';
import './index.css';
import block from 'bem-cn';

export default function Service ({service}, {}) {

  const b = block('service');

  const content = (service) => {
    switch(service) {
      case 'code':
        return {
          description: 'Coding is the practice of writing instructions that a computer can execute to achieve a specific task, or series of tasks.  Learning a computer language is similar to learning a human language, except that the rules and syntaxes required for interpretation are much more strict.  Computers lack lanugage flexibility, but when programmed correctly they are capable of processing information millions of times faster than a human would be capable of.',
          quote: {
            text: 'In theory, there is no difference between theory and practice. But, in practice, there is.',
            by: 'Jan L. A. van de Snepscheut'
          }
        }
      case 'design':
        return {
          description: 'Design is the set of physical and social patterns to be used in the development of an object or system.  Effective design takes into consideration the various important features of an object, which often include: aesthetics, functionality, materials, and interaction.  Design is a human tool that allows us to shape our environment in ways that give meaning and happiness to our lives.',
          quote: {
            text: 'You can use an eraser on the drafting table or a sledgehammer on the construction site.',
            by: 'Frank Lloyd Wright'
          }
        }
      case 'data analysis':
        return {
          description: 'hi',
          quote: ''
        }
      case 'media literacy':
        return {
          description: 'A question is a desire for knowledge.  The ability to ask deep questions about the situations we face gives us the experience to form our own thoughts opinions, and also lets us make informed decisions in line with our beliefs.',
          quote: {
            text: '',
            by: ''
          }
        }
      default:
        return {
          description: null,
          quote: ''
        }
    }
  }

  return (
    <div className={b()}>
      <h1>{service}</h1>
      <h4>{content(service).description}</h4>
      <div className={b('quote')}>
        <div className={b('quote__text')}>
          {content(service).quote.text}
        </div>
        <div className={b('quote__by')}>
          — {content(service).quote.by}
        </div>
      </div>
      <div className={b('blog-posts')}>
        blog posts about {service}
      </div>
    </div>
  )
}
