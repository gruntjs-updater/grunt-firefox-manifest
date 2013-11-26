# grunt-firefox-manifest

> Create a Firefox manifest from your projects package.json.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-firefox-manifest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-firefox-manifest');
```

## The "firefoxManifest" task

### Overview
In your project's Gruntfile, add a section named `firefoxManifest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  firefoxManifest: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## The package.json section

Add a section `firefoxManifest` to your `package.json` where you provide the needed information for the manifest. If you don't provide *name*, *description*, *version* or *developer* in the `firefoxManifest` section, then the fields of the `package.json` will be used instead (*developer* falls back to *author*).

Assume we have a package.json like the following:

```js
{
  "name": "My App",
  "description": "My App description",
  "version": "0.4.0",
  "author": {
    "name": "The developer",
    "email": "email@example.com",
    "url": "http://example.com/"
  },
  "engines": {
    "node": ">= 0.8.0"
  },
  "scripts": {
    "test": "grunt test"
  },
  "firefoxManifest": {
    "permissions": {
      "geolocation": {
        "description": "Required to locate you."
      }
    },
    "icons": {
      "128": "/img/icon-128.png"
    },
    "appcache_path": "/manifest.appcache",
    "launch_path": "/"
  }
}
```

This will generate the following `manifest.webapp`:

```js
{
  "name": "My App",
  "description": "My App description",
  "version": "0.4.0",
  "permissions": {
    "geolocation": {
      "description": "Required to locate you."
    }
  },
  "icons": {
    "128": "/img/icon-128.png"
  },
  "appcache_path": "/manifest.appcache",
  "launch_path": "/",
  "developer": {
    "name": "The developer",
    "email": "email@example.com",
    "url": "http://example.com/"
  }
}
```

### Options

#### options.packageJson
Type: `String`
Default value: `'package.json '`

The location of the package.json to use as the data source.

#### options.manifest
Type: `String`
Default value: `'manifest.webapp'`

The location where to write the Firefox manifest to.

### Usage Examples

#### Default Options
Using the default options generates a `manifest.webapp` file next to your `package.json`.

```js
grunt.initConfig({
  firefoxManifest: {
    options: {}
  },
});
```

#### Custom Options
If one of the files is located in a different location, pass the path to it as a param:

```js
grunt.initConfig({
  firefoxManifest: {
    options: {
      packageJson: 'app/package.json',
      manifest: ' dist/manifest.webapp',
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### 0.1.0
* Initial release
