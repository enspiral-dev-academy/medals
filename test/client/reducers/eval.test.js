import {GET_TAGS} from '../../../client/actions/eval'
import evalTags from '../../../client/reducers/eval-tags'

const state = ''

test('evalTags reducer updates state with tags', () => {
  const action = {
    type: GET_TAGS,
    tags: ['tag1', 'tag2']}
  const newState = evalTags(state, action)
  expect(newState.length).toBe(2)
})
