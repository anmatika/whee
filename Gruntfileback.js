'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
 
  // Define the configuration for all the tasks
  grunt.initConfig({
   
    // Watches files for changes and runs tasks based on the changed files
    // watch: {
    //   bower: {
    //     files: ['bower.json'],
    //     tasks: ['wiredep']
    //   },
      
    //   compass: {
    //     files: ['/styles/{,*/}*.{scss,sass}'],
    //     tasks: ['compass:server', 'autoprefixer']
    //   },
    //   gruntfile: {
    //     files: ['Gruntfile.js']
    //   }      
    // },
    // // Make sure code styles are up to par and there are no obvious mistakes
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //     reporter: require('jshint-stylish')
    //   },
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       '/scripts/{,*/}*.js'
    //     ]
    //   },
    //   test: {
    //     options: {
    //       jshintrc: 'test/.jshintrc'
    //     },
    //     src: ['test/spec/{,*/}*.js']
    //   }
    // },
    watch: {
    options: {
      livereload: true,
    },
    css: {
      files: ['public/scss/*.scss'],
      tasks: ['compass'],
    },
  },
    
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['/sass/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },
    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '/sass',
        cssDir: '/css',
        generatedImagesDir: '.tmp/images/generated',
        javascriptsDir: '/js',
        fontsDir: '/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    }
  });

  grunt.registerTask('watch', [
    'watch'
  ]);

};
