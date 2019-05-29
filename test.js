var AJV = require('ajv')
var assert = require('assert')
var schema = require('.')

var ajv = new AJV()

require('./examples.json').forEach(function (example) {
  ajv.validate(schema, example)
  assert.strictEqual(ajv.errors, null)
})
