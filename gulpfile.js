const gulp = require('gulp');
//const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin'); // lossless - reducing the file size but not throwing away any information
const pngquant = require('imagemin-pngquant'); // lossy - really small file sizes at the expense of image quality

gulp.task('livereload', () => {
	browserSync.create();

	browserSync.init({
		server: './dist'
	});
});

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('lint', () => {
	return gulp.src(['**/*.js', '!node_modules/**'])
		.pipe(eslint())
		.pipe(eslint.format());
		//.pipe(eslint.failAfterError());
});

gulp.task('copy-html', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('copy-images', function() {
	gulp.src('img/*')
		.pipe(imagemin({
			progressive: true, 
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

// gulp.task('styles', function() {
// 	gulp.src('sass/**/*.scss')
// 		.pipe(sass({
// 			outputStyle: 'compressed'
// 		}).on('error', sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('dist/css'))
// 		.pipe(browserSync.stream());
// });

gulp.task('styles', function() {
	gulp.src('less/**/*.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('watch', () => {
	gulp.watch('less/**/*.less', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('index.html', ['copy-html']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

gulp.task('default', ['copy-html', 'copy-images', 'styles', 'lint', 'livereload', 'watch', 'scripts']);
gulp.task('dist', ['copy-html', 'copy-images', 'styles', 'lint', 'scripts-dist']);
