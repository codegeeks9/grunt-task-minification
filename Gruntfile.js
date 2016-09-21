module.exports = function(grunt) {

	grunt.registerTask('default', ['uglify', 'cssmin','watch']); 

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/main.min.js': ['src/js/main.js','src/js/main2.js']
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/index.min.css': 'src/scss/index.css'
        }
      }
    },

    watch:{
        stylesheets: { 
          files: ['src/**/*.css'], 
          tasks: ['cssmin'] 
        },

        scripts: { 
          files: 'src/**/*.js', tasks: ['uglify'] 
        } 
      }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
