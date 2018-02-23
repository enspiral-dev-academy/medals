import request from 'superagent'
export const GET_TOPICS = 'GET_TOPICS'

export const getTopics = (list) => {
  return {
    type: GET_TOPICS,
    topics: list

  }
}

export const FETCH_LIST = 'FETCH_LIST'

export function fetchList () {
  return (dispatch) => {
    request
      .get('http://localhost:3000/api/v1/topic')
      .end((err, res) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
        const list = res.body.topics
        const send = []
        for (let i = 0; i < list.length; i++) {
          send.push(list[i].tag)
        }
        dispatch(getTopics(send))
      })
  }
}

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

export function getQuestions () {
  return (dispatch) => {
    request
      .get('http://localhost:3000/api/v1/topic/questions')
      .end((err, res) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
        const list = res.body.ids
        const send = []
        for (let i = 0; i < list.length; i++) {
          send.push(list[i].id)
        }
        dispatch(questions(send))
      })
  }
}

export const questions = (list) => {
  return {
    type: FETCH_QUESTIONS,
    questions: list

  }
}
