/*
 * grunt-firefox-manifest
 * https://github.com/ro-ka/grunt-firefox-manifest/
 *
 * Copyright (c) 2013 Robert Katzki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
      manifest: ['manifest.webapp']
    },

    // Configuration to be run (and then tested).
    firefoxManifest: {
      default_options: {
        options: {
        }
      },
      custom_options: {
        options: {
          packageJson: 'test/fixtures/package.json',
          manifest: 'tmp/manifest.webapp',
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'firefoxManifest', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
