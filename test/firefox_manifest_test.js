'use strict';

var grunt = require('grunt');

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

exports.firefoxManifest = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('manifest.webapp'),
      expected = grunt.file.readJSON('test/expected/manifest-default.webapp');

    test.equal(
      JSON.stringify(actual),
      JSON.stringify(expected),
      'The generated manifest is not as expected ' +
      'when using the default options.'
    );

    test.done();
  },

  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/manifest.webapp'),
      expected = grunt.file.readJSON('test/expected/manifest-custom.webapp');

    test.equal(
      JSON.stringify(actual),
      JSON.stringify(expected),
      'The generated manifest is not as expected ' +
      'when using custom options.'
    );

    test.done();
  },
};
