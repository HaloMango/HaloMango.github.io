module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!\nAuthor: George Matthew Li\nAuthor URL: https://gmwli.github.io\n' +
          'Modified: <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
      },
      build: {
        src: 'js/functions.js',
        dest: 'js/functions.min.js'
      }
    },
    cssmin: {
      options: {
        banner: '/*!\nAuthor: George Matthew Li\nAuthor URL: https://gmwli.github.io\n' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
      },
      build: {
        src:  'css/main.css',
        dest: 'css/main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
