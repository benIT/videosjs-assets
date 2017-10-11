module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        clean: {
            assets: ['dist'],
        },
        copy: {
            main: {
                expand: true,
                cwd: 'bower_components/videojs/dist',
                src: ['**', '!*.zip'],
                dest: 'dist/',
            },
        },

    });
    grunt.registerTask('default', ["clean", "copy"]);
};