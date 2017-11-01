import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router} from 'react-router'

afterEach(jest.resetModules)

test('<Header /> shows log off link when signed in', () => {
  jest.doMock('../../../client/lib/auth', () => ({
    isAuthenticated: () => true
  }))
  const Header = require('../../../client/components/Header').default
  const mockStore = configureStore()({
    busy: false,
    userDetails: {
      id: 1,
      username: 'jules'
    }
  })

  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  )

  expect(wrapper.find('.header').text()).toMatch(/Log off/)
})

test('<Header /> shows Register link when not signed in', () => {
  jest.doMock('../../../client/lib/auth', () => {
    return {isAuthenticated: () => false}
  })
  const Header = require('../../../client/components/Header').default
  const mockStore = configureStore()({
    userDetails: null,
    busy: false
  })

  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  )

  expect(wrapper.find('.header').text()).toMatch(/Register/)
})
