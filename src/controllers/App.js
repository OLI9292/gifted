import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import { controller, getProps } from 'react-redux-controller'
import * as actions from '../actions'
import * as selectors from '../selectors'
import MainLayout from '../components/main_layout/index'

const controllerGenerators = {
  *initialize() {
    const { selectedService } = yield getProps
  },

  *selectService(name) {
    const { dispatch, selectedService } = yield getProps

    dispatch(actions.selectService(name))
  },
}

export default controller(
  MainLayout,
  controllerGenerators,
  selectors
);
