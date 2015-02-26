module.exports = function(grunt) {

  grunt.initConfig({
      postcss: {
          options: {
              processors: [
                  require('autoprefixer-core')({
                      browsers: ['last 2 version', 'ie 8', 'ie 9']
                  }).postcss,
                  require('csswring').postcss
              ]
          },
          dist: {
              src: 'public/stylesheets/*.css'
          }
      },

      sass: {
          dist: {
              options: {
                  sourcemap: 'auto'
              },
              files: {
                  'public/stylesheets/style.css': 'public/assets/sass/style.scss'
              }
          }
      },

      browserify: {
        main: {
          options: {
            browserifyOptions: {
              debug: true
            }
          },
          src: 'public/assets/js/**.js',
          dest: 'public/js/index.js'
        }
      },

      jshint: {
          options: {
            jshintrc: true
          },
          all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js', 'public/assets/**/*.js']
      },

      watch: {
          postcss: {
              files: ['**/*.css'],
              tasks: ['postcss']
          },
          sass: {
              files: ['**/*.{scss,sass}'],
              tasks: ['sass']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'postcss', 'browserify']);

};

/* need
autoprefixer-core
csswring
grunt
grunt-contrib-watch
grunt-postcss
*/
