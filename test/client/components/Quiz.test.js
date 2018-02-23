import React from 'react'
import {mount, render} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router} from 'react-router'

import Quiz from '../../../client/components/assessments/Quiz'

test('<Quiz /> shows a question', () => {
  const wrapper = render(<Quiz />)
  expect(wrapper.find('h2').length).toBe(1)
})

test('<Quiz /> shows 4 answers', () => {
  const wrapper = render(<Quiz />)
  expect(wrapper.find('input').length).toBe(4)
})
// working to simulate click test
test.skip('<Quiz /> shows <Check /> on submit', () => {
  const wrapper = render(<Quiz />)
  wrapper.find('button').simulate('click')
  expect(wrapper.find('button').length).toBe(2)
})
