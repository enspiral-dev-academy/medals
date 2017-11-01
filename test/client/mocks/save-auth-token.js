/* eslint-env jest */

jest.mock('../../../client/lib/auth', () => {
  const testToken = {id: 'test token id'}
  return {
    saveAuthToken: () => testToken
  }
})
