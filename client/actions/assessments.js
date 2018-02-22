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
        dispatch(getTopics(res.body.topics))
      })
  }
}
