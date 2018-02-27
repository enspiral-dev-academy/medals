import React from 'react'
import {mount} from 'enzyme'

import {WaitList} from '../../../client/components/WaitList'

WaitList.prototype.componentDidMount = () => {}

test('<WaitList /> Displays User Table When route is accessed', () => {
  const allUsers = [{
    id: 1,
    ghid: 9,
    username: 'test user 1'
  }, {
    id: 2,
    ghid: 8,
    username: 'test user 2'
  }, {
    id: 3,
    ghid: 7,
    username: 'test user 3'
  }]
  const wrapper = mount(<WaitList allUsers={allUsers} />)

  expect(wrapper.find('th').length).toBe(3)
})
