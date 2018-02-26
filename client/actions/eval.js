import request from 'superagent'
import {showError} from './error'

export const GET_TAGS = 'GET_TAGS'
export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const UPDATE_TAGS = 'UPDATE_TAGS'

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://medals.devacademy.co.nz'
  : 'http://localhost:3000'

export const getTags = (list) => {
  return {
    type: GET_TAGS,
    tags: list
  }
}

export function fetchList () {
  return (dispatch) => {
    request
      .get(baseUrl + '/api/v1/tags')
      .end((err, res) => {
        if (err) {
          dispatch(showError('An unexpected error has occurred.'))
        }
        const list = res.body.tags
        const send = []
        for (let i = 0; i < list.length; i++) {
          send.push(list[i].tag)
        }
        dispatch(getTags(send))
      })
  }
}

export const questions = (list) => {
  return {
    type: FETCH_QUESTIONS,
    questions: list
  }
}

export function getQuestions (questionTag) {
  return (dispatch) => {
    request
      .get(baseUrl + `/api/v1/tags/${questionTag}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError('An unexpected error has occurred.'))
        }
        dispatch(questions(res.body))
      })
  }
}

export const sendTag = (tag) => {
  return {
    type: UPDATE_TAGS,
    questionTag: tag
  }
}
