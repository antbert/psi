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

    scsslint: {
      allFiles: [
        'app/client/sass/**/*.scss'
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        colorizeOutput: true
      }
    },

    watch: {
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass', 'scsslint']
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jade']
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: 'statichtml/jade/',
          src: '**/*.jade',
          dest: 'statichtml/',
          ext: '.html'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'postcss']);
  grunt.registerTask('cjade', ['jade']);
};
