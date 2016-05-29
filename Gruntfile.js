// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
    concat: {
      main: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'build/es5.js'
        ],
        dest: 'build/scripts.js'
      }
    },
    // Сжимаем
    uglify: {
      main: {
        files: {
          // Результат задачи concat
          'build/scripts.min.js': 'build/scripts.js'
        }
      }
    },
    watch: {                              // виконується останнім, бо працюватиме назавжди
      concat: {
        files: 'es6.js',
        tasks: ['babel', 'concat', 'uglify']
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
          'build/es5.js': 'es6.js'
        }
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');

  // Задача по умолчанию
  grunt.registerTask('default', ['babel', 'concat', 'uglify', 'watch']);
};