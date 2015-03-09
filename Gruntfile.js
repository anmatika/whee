module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    
    // watch automatically sass changes
    compass: {      
      dev: { 
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          watch: true
        }
      }
    },
    // automatically inject bower components into the app
    wiredep: {
      app: {
        src: ['index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['sass/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },
    // jshint for javascripts
    jshint: {
       all: ['Gruntfile.js', 'js/**/*.js']
    }
  });

  grunt.registerTask('default', ['wiredep', 'jshint', 'compass']);

};