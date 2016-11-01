import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import { controller, getProps } from 'react-redux-controller'
import * as actions from '../actions'
import * as selectors from '../selectors'
import { read } from '../lib/utils'
import Table from '../components/table/index'


const controllerGenerators = {
  *initialize() {
    const { selectedWorld } = yield getProps
  },

  *onFetchTable(table) {
    const { dispatch } = yield getProps

    const data = yield read(`${process.env.BASE_URL}${table}`).then((res) => res)
    const rows = data['_embedded'][table]
    dispatch(actions.updateTable(table, rows))
  },
}

export default controller(Table, controllerGenerators, selectors)
