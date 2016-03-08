var gulp = require('gulp'),
postcss = require('gulp-postcss'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
lost = require('lost');

gulp.task('styles', function () {
  var processors = [ autoprefixer, lost
  ];
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task("watch", function(){
	console.log("Watching scss files for modifications");
	gulp.watch('scss/**/*.scss', ["styles"]);
});

gulp.task('default', ['styles', 'watch']);
