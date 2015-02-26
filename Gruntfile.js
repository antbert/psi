const SERVER_JS_FILES = ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'];
const CLIENT_JS_FILES = ['public/assets/**/*.js'];
const ALL_JS_FILES = SERVER_JS_FILES.concat(CLIENT_JS_FILES);

module.exports = function initGrunt(grunt) {

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
        src: CLIENT_JS_FILES,
        dest: 'public/js/index.js'
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      all: ALL_JS_FILES
    },

    jscs: {
      all: {
        options: {
          config: '.jscsrc'
        },
        files: {
          src: ALL_JS_FILES
        }
      }
    },

    watch: {
      postcss: {
        files: ['**/*.css'],
        tasks: ['postcss']
      },
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass']
      },
      js: {
        files: ALL_JS_FILES,
        tasks: ['jshint', 'jscs']
      },
      clientJs: {
        files: CLIENT_JS_FILES,
        tasks: ['browserify']
      }
    },

    githooks: {
      all: {
        // Will run the jshint and test:unit tasks at every commit
        'pre-commit': 'jshint jscs',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-githooks');

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
