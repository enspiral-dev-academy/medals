import React from 'react'
import {render} from 'enzyme'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router} from 'react-router'

import ErrorMessage from '../../../client/components/ErrorMessage'

test('<ErrorMessage /> shows message when supplied', () => {
  const message = 'test error message'
  const mockStore = configureStore()({errorMessage: message})
  const wrapper = render(<Router><ErrorMessage store={mockStore} /></Router>)
  expect(wrapper.find('.error-message').text()).toBe(message)
})

test('<ErrorMessage /> does not show message when not supplied', () => {
  const emptyMessage = ''
  const mockStore = configureStore()({errorMessage: emptyMessage})
  const wrapper = render(<Router><ErrorMessage store={mockStore} /></Router>)
  expect(wrapper.find('.error-message').text()).toBe(emptyMessage)
})
