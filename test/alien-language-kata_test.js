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
    test.deepEqual(alien.match(['acd','bcd'], ['acd', 'abc']), [1,0]);
    test.done();
  },
//   'target test': function(test) {
//     test.expect(1);
//     test.equal(alien.match('3 5 4\n\
// abc\n\
// bca\n\
// dac\n\
// dbc\n\
// cba\n\
// (ab)(bc)(ca)\n\
// abc\n\
// (abc)(abc)(abc)\n\
// (zyx)bc'), [2,1,3,0]);
//     test.done();
//   },
};
