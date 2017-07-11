var gulp = require('gulp');
var sass = require('gulp-sass');
var input="./sass/**/*.scss";
var output="./public/css";

gulp.task('default', function(){
	return gulp
	.src(input)
	.pipe(sass())
	.pipe(gulp.dest(output));
});

gulp.task('watch', function(){
	gulp.watch(input, function(event){
		console.log('File ' + event.path + ' was' + event.type + 'running task........');
		gulp.start('default')

	});
});
