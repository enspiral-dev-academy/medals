const sodium = require('sodium').api

module.exports = {
  generate,
  verify
}

function generate (password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
}

function verify (hash, password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str_verify(hash, passwordBuffer)
}
