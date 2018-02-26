import {GET_TAGS, getTags, FETCH_QUESTIONS, questions} from '../../../client/actions/eval'

test('getTags, returns tag list', () => {
  const list = ['tag1', 'tag2']
  const expected = {
    type: GET_TAGS,
    tags: list
  }
  expect(getTags(list)).toEqual(expected)
})

test('questions, returns question list', () => {
  const list = ['question1', 'question2']
  const expected = {
    type: FETCH_QUESTIONS,
    questions: list
  }
  expect(questions(list)).toEqual(expected)
})
