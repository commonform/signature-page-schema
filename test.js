var tv4 = require('tv4')
var assert = require('assert')
var schema = require('.')

require('./examples.json').forEach(function (example) {
  assert(tv4.validate(example, schema))
})
