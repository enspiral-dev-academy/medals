import React from 'react'
import {render, shallow} from 'enzyme'

import EvalMe from '../../../client/components/eval/EvalMe'

test.skip('<EvalMe /> shows a question', () => {
  const wrapper = render(<EvalMe />)
  expect(wrapper.find('h2').length).toBe(1)
})

test.skip('<EvalMe /> shows 4 answers', () => {
  const wrapper = render(<EvalMe />)
  expect(wrapper.find('input').length).toBe(4)
})

// attempting to simulate click test
test.skip('<EvalMe /> shows <Check /> on submit', () => {
  const wrapper = shallow(<EvalMe />)
  wrapper.find('button').simulate('click')
  expect(wrapper.state.check).toBeTruthy()
})
