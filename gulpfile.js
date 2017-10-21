var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('livereload', () => {
    browserSync.create();

    browserSync.init({
		server: "./dist"
	});
});

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        //.pipe(eslint.failAfterError());
});

gulp.task('copy-html', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('copy-images', function() {
	gulp.src('img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('index.html', ['copy-html']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

gulp.task('default', ['copy-html', 'copy-images', 'styles', 'lint', 'livereload', 'watch']);
gulp.task('dist', ['copy-html', 'copy-images', 'styles', 'lint', 'scripts-dist']);