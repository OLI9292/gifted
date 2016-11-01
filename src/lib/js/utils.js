import { assign } from 'lodash';
import EventEmitter from 'events';
import uuid from 'node-uuid';

export const read = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Http-Authorization': 'replace-me'
    }
  }).then(function(res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    return res.json()
  }).then(function(res) {
    return res
  })
}

export const snakeCase = (str) => {
  return str.replace(' ', '_').toLowerCase()
}
