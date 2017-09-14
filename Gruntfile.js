module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        responsive_images: {
            dev: {
                options: {},
                files: [{
                    expand: true,
                    src: ['images/*.{jpg,gif,png}'],
                    cwd: 'src/',
                    dest: 'dist/'
                }],
                sizes: [{
                    name: 'small',
                    width: 320,
                }, {
                    name: 'medium',
                    width: 640
                }, {
                    name: "large",
                    width: 1024,
                    separator: "-",
                    suffix: "_x2",
                    quality: 0.6
                }]
            }
        },
        concat: {
            css: {
                src: ['css/custom.css'],
                dest: 'dist/main.css',
            },
            options: {
                separator: ';',
            },
            dist: {
                src: [''],
                dest: 'dist/global.js',
            }
        },
        uglify: {
            build: {
                src: 'dist/production.js',
                dest: 'dist/production.min.js'
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: ['**/*', '!app/img/**/*.*'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['concat', 'uglify']);

};