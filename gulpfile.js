var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass-ns');
var plumber = require('gulp-plumber'); // stops gulp from stopping on errors 
var imageMin = require('gulp-imagemin');
var concat = require('gulp-concat');


/*  Compresses the images used in the project
_____________________________________________*/
gulp.task('compress-images', function(){
    
    gulp.src('img-tmp/*').pipe(imageMin()).pipe(gulp.dest('dist/img'));
});

/*  Compresses the JS files used in the project
_______________________________________________*/
gulp.task('build-scripts', function(){
    
    gulp.src('js/**/*.js').pipe(plumber()).pipe(uglify()).pipe(gulp.dest('dist/js'));
});

/*  Builds the sass files used in the project
_______________________________________________*/
gulp.task('build-styles', function(){
    
    // finds all scss files anywhere inside the scss folder. conpiles it, saves it to the css fodler
    gulp.src('sass/**/*.scss').pipe(plumber()).pipe(sass({style:'compressed'})).pipe(gulp.dest('dist/css'));
    
});

gulp.task('concat-scripts', function(){
    
    gulp.src('dist/js/**/*.js').pipe(concat('app.min.js')).pipe(gulp.dest('dist/js/min'));
});


/*  Watches actives files for updates
_______________________________________________*/
gulp.task('watch', function(){
    
    // watches all of the files in teh javascript fodler and automatically runs the scripts task
    gulp.watch('js/*.js',['build-scripts']);
    
    // watches all the files  in the scss folder and runs the styles task
    gulp.watch('sass/*.scss',['build-styles']);
    
});

gulp.task('default',['build-styles','build-scripts','watch'])