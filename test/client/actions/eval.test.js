import {GET_TAGS, getTags, FETCH_QUESTIONS,
  questions, UPDATE_TAGS, sendTag} from '../../../client/actions/eval'

test('getTags, returns tag list', () => {
  const list = ['tag1', 'tag2']
  const expected = {
    type: GET_TAGS,
    tags: ['tag1', 'tag2']
  }
  expect(getTags(list)).toEqual(expected)
})

test('questions, returns question list', () => {
  const list = ['question1', 'question2']
  const expected = {
    type: FETCH_QUESTIONS,
    questions: ['question1', 'question2']
  }
  expect(questions(list)).toEqual(expected)
})

test('sendTag, returns question Tag', () => {
  const tag = ['question-tag1', 'question-tag2']
  const expected = {
    type: UPDATE_TAGS,
    questionTag: ['question-tag1', 'question-tag2']
  }
  expect(sendTag(tag)).toEqual(expected)
})
