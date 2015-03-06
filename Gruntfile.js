module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    
    compass: { // Task     
      dev: { // target
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          watch: true
        }
      }
    },
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['sass/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    }
  });

  grunt.registerTask('default', ['wiredep', 'compass']);

}