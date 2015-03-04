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
        ]
      },
      dist: {
        src: 'app/client/styles/*.css'
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

    scsslint: {
      allFiles: [
        'app/client/sass/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml', 
        colorizeOutput: true
      },
    },

    watch: {
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass', 'scsslint']
      },
      js: {
        files: JS_FILES,
        tasks: ['jshint', 'jscs']
      }
    },

    githooks: {
      all: {
        'pre-commit': ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-scss-lint');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'postcss']);
  grunt.registerTask('jsQuality', ['concurrent:jsQuality']);
};
