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
                src: 'stylesheets/*.css'
            }
        },

        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'stylesheets/style.css': 'sass/style.scss'
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

};

/* need
autoprefixer-core
csswring
grunt
grunt-contrib-watch
grunt-postcss
*/
