import { PropTypes } from 'react'

export const selectedService = state => state.selectedService
selectedService.propType = PropTypes.string.isRequired
