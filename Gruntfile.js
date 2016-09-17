module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*!\n Author: <%= pkg.author %>\n Project: <%= pkg.name %>\n Last Modified: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n\n'
            },
            dist: {
                src: [
                    'public/javascripts/*.js'
                ],
                dest: 'public/javascripts/main/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*!\n Author: <%= pkg.author %>\n Project: <%= pkg.name %>\n Last Modified: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n\n'
            },
            build: {
                src: 'public/javascripts/main/main.js',
                dest: 'build/javascripts/main.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    src: ['public/images/*.{png,jpg,gif}'],
                    dest: 'build/images'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['public/javascripts/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};