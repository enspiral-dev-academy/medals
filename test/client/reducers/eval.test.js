import {GET_TAGS, FETCH_QUESTIONS, UPDATE_TAGS} from '../../../client/actions/eval'
import evalTags from '../../../client/reducers/eval-tags'
import evalQuestions from '../../../client/reducers/eval-questions'
import updateTag from '../../../client/reducers/eval-update-tags'
const state = ''

test('evalTags reducer updates state with tags', () => {
  const action = {
    type: GET_TAGS,
    tags: ['tag1', 'tag2']}
  const newState = evalTags(state, action)
  expect(newState.length).toBe(2)
})

test('evalQuestions reducer updates state with question', () => {
  const action = {
    type: FETCH_QUESTIONS,
    questions: ['question1', 'question2']
  }
  const newState = evalQuestions(state, action)
  expect(newState.length).toBe(2)
})

test('updateTag reducer updates store with selected tags', () => {
  const action = {
    type: UPDATE_TAGS,
    questionTag: ['tag1', 'tag2']
  }
  const newState = updateTag(state, action)
  expect(newState.length).toBe(2)
})
