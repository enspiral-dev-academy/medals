import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router} from 'react-router'

import WaitList from '../../../client/components/WaitList'

test.skip('<WaitList /> Displays User Table When route is accessed', () => {
  const mockStore = configureStore()({
    allUsers: [{
      ghid: 3232,
      id: 12,
      username: test
    }]
  })

  WaitList.prototype.componentDidMount = () => {}

  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <WaitList />
      </Router>
    </Provider>
  )

  expect(wrapper.find('th')).to.have.length(3)
})
