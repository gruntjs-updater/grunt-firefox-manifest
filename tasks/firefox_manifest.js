/*
 * grunt-firefox-manifest
 * https://github.com/ro-ka/grunt-firefox-manifest/
 *
 * Copyright (c) 2013 Robert Katzki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask(
    'firefoxManifest',
    'Create a Firefox manifest from your projects package.json.',
    function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
          packageJson: 'package.json',
          manifest: 'manifest.webapp'
        }),
        // Read the package.json content
        packageJsonContent = grunt.file.readJSON(options.packageJson),
        manifestContent = packageJsonContent.firefoxManifest || {},
        manifestJson;

      // Use values from package.json if not provided specifically
      if (!manifestContent.name) {
        manifestContent.name = packageJsonContent.name;
      }

      if (!manifestContent.description) {
        manifestContent.description = packageJsonContent.description;
      }

      if (!manifestContent.version) {
        manifestContent.version = packageJsonContent.version;
      }

      if (!manifestContent.developer) {
        manifestContent.developer = packageJsonContent.author;
      }

      // Convert manifest object to formatted JSON
      manifestJson = JSON.stringify(manifestContent, null, 2);

      // Write the manifest file.
      grunt.file.write(options.manifest, manifestJson);

      grunt.log.writeln(
        'Firefox Manifest written to "' + options.manifest + '".'
      );
    }
  );
};
