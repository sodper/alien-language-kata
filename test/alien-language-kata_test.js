'use strict';

var alien = require('../lib/alien-language-kata.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.match = {
  '1 test, 1 match': function(test) {
    test.expect(1);
    test.deepEqual(alien.match(['abc'], ['abc']), [1]);
    test.done();
  },
  '2 tests, 1 match': function(test) {
    test.expect(1);
    test.deepEqual(alien.match(['acd','bcd'], ['acd','abc']), [1,0]);
    test.done();
  },
  '1 paren test, 3 matches': function(test) {
    test.expect(1);
    test.deepEqual(alien.match(['ade','bde','cde'], ['(abc)de']), [3]);
    test.done();
  },
  'target test': function(test) {
    test.expect(1);
    test.deepEqual(alien.match(['abc','bca','dac','dbc','cba'], ['(ab)(bc)(ca)','abc','(abc)(abc)(abc)','(zyx)bc']), [2,1,3,0]);
    test.done();
  },
};
