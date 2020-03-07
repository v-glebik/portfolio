var gulp = require('gulp'),
    useref = require('gulp-useref'),
    uglifyJs = require('gulp-uglifyjs'),
    less = require('gulp-less'),
    autoPrefix = require('gulp-autoprefixer'),
	csscomb = require('gulp-csscomb'),
    imageMin = require('gulp-imagemin'),
    BS = require('browser-sync');

/*
1. gulp.task() - создание новой задачи.
2. gulp.src() - позволяет выбрать исходящие файлы для дальнейших преобразований.
3. gulp.dest() - сохранение уже преобразованных файлов.
4. gulp.watch() - метод для контроля изменений в файлах.
 */

var config = {
    app: './app',
    dist: './dist'
};

gulp.task('test', function () {
    console.log('Gulp works!');
});

gulp.task('default', ['test', 'html', 'fonts', 'img', 'less', 'css', 'js', 'mywatch', 'server'], function () {
    console.log('Default task!');
});

gulp.task('html', function () {
    gulp.src(config.app + '/html/*.html')
		.pipe(useref())
        .pipe(gulp.dest(config.dist + '/html'))
        .pipe(BS.reload({stream: true}));
});

gulp.task('fonts', function () {
    gulp.src(config.app + '/fonts/*')
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(BS.reload({stream: true}));
});

gulp.task('img', function () {
    gulp.src(config.app + '/images/**/*.+(jpg|png)')
        .pipe(imageMin())
        .pipe(gulp.dest(config.dist + '/images'));
});

gulp.task('less', function(){
    gulp.src(config.app + '/style.less')
    .pipe(less())   
    .pipe(gulp.dest(config.app))
    .pipe(BS.reload({stream: true}));
});

gulp.task('css', function () {
    gulp.src(config.app + '/*.css')
        .pipe(autoPrefix())
		.pipe(csscomb())
        .pipe(gulp.dest(config.dist))
        .pipe(BS.reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src(config.app + '/js/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(BS.reload({stream: true}));
});

gulp.task('mywatch',function () {
    gulp.watch([config.app + '/html/index.html'], ['html']);
    gulp.watch([config.app + '/fonts'], ['fonts']);
    gulp.watch([config.app + '/templates'], ['templates']);
    gulp.watch(config.app + '/css/**/*.css', ['css']);
    gulp.watch(config.app + '/js/**/*.js', ['js']);
});

//Server
gulp.task('server', function () {
    BS({
        server: {
            baseDir: config.dist
        }
    });
});



