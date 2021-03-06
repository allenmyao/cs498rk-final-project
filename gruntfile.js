module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.initConfig({
    clean: ["public/js"],
    uglify: {
      my_target: {
        options: {
          mangle: false // change variable and function names
        },
        files: [
          {
            expand: true, // dynamic (recursive) src->dest mapping
            cwd: 'frontend/js',
            src: ['**/*.js'],
            dest: 'public/js',
          }
        ]
      }
    },
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'frontend/sass',
            src: ['**/*.scss'],
            dest: 'public/css',
            ext: '.min.css'
          }
        ]
      }
    },
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['frontend/js/controllers/*.js', 'frontend/js/*.js'],
        tasks: ['clean', 'uglify']
      },
      sass: {
        files: ['frontend/sass/*.scss'],
        tasks: ['sass:dist']
      },
      html: {
        files: ['frontend/views/*.jade', 'public/**/*.html']
      }
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    }
  })
  grunt.registerTask('default', ['express:dev', 'watch']);
}