// keys.js - figure out which set of creds to use

if (process.env.NODE_ENV === 'production') {
  // return prod keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
