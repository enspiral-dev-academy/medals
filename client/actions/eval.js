import request from 'superagent'
export const GET_TAGS = 'GET_TAGS'

export const getTags = (list) => {
  return {
    type: GET_TAGS,
    tags: list

  }
}

export const FETCH_LIST = 'FETCH_LIST'

export function fetchList () {
  return (dispatch) => {
    request
      .get('http://localhost:3000/api/v1/tags')
      .end((err, res) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
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

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

export function getQuestions (questionTag) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/v1/tags/${questionTag}`)
      .end((err, res) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
        dispatch(questions(res.body))
      })
  }
}

export const questions = (list) => {
  return {
    type: FETCH_QUESTIONS,
    questions: list

  }
}

export const UPDATE_TAGS = 'UPDATE_TAGS'

export const sendTag = (tag) => {
  return {
    type: UPDATE_TAGS,
    questionTag: tag

  }
}
