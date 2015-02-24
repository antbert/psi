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
                    sourcemap: 'none'
                },
                files: {
                    'public/stylesheets/style.css': 'assets/sass/style.scss'
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'postcss']);

};

/* need
autoprefixer-core
csswring
grunt
grunt-contrib-watch
grunt-postcss
*/
