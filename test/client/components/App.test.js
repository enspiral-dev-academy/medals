import React from 'react'
import {shallow} from 'enzyme'

import App from '../../../client/components/App'

test('<App /> contains the router', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<BrowserRouter />')
})
