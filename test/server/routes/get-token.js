import token from '../../../server/auth/token'
import jwtTestSecret from './jwt-test-secret'

module.exports = (id = 1, username = 'jules') => {
  return token.createToken({id, username}, jwtTestSecret)
}
