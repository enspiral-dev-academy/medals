import React from 'react'
import {render} from 'enzyme'
import configureStore from 'redux-mock-store'

import BusyIndicator from '../../../client/components/BusyIndicator'

test('<BusyIndicator /> shows correct image when busy', () => {
  const mockStore = configureStore()({busy: true})
  const wrapper = render(<BusyIndicator store={mockStore} />)
  expect(wrapper.find('.busy-indicator img').attr('src')).toMatch(/animated-circle.gif/)
})

test('<BusyIndicator /> does not show image when not busy', () => {
  const mockStore = configureStore()({busy: false})
  const wrapper = render(<BusyIndicator store={mockStore} />)
  expect(wrapper.find('.busy-indicator img').length).toBe(0)
})
