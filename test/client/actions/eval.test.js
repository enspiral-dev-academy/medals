import {GET_TAGS, getTags} from '../../../client/actions/eval'

test('getTags, returns tag list', () => {
  const list = ['tag1', 'tag2']
  const expected = {
    type: GET_TAGS,
    tags: list
  }
  expect(getTags(list)).toEqual(expected)
})
