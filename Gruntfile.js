
const TEST_FILES = 'app/test/**/*.js';
const JS_FILES = [
  'Gruntfile.js', 
  'app/client/**/*.js', 
  'app/server/**/*.js',
  TEST_FILES
];
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
          'app/client/styles/style.css': 'app/client/sass/style.scss'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      all: JS_FILES
    },

    jscs: {
      all: {
        options: {
          config: '.jscsrc'
        },
        files: {
          src: JS_FILES
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
        files: JS_FILES,
        tasks: ['concurrent:jsQuality']
      }
    },

    concurrent: {
        jsQuality: {
            tasks: ['jshint', 'jscs', 'mochaTest'],
            options: {
                logConcurrentOutput: false
            }
        }
    },

    githooks: {
      all: {
        'pre-commit': 'concurrent:jsQuality',
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: [TEST_FILES]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'postcss']);
  grunt.registerTask('jsQuality', ['concurrent:jsQuality']);
};
