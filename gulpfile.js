var gulp = require('gulp');
var atomify = require('atomify');
var path = require('path');

function relPath(p) {
  return path.join(__dirname, p);
}

var configAtomify = {
  js: {
    entry: 'src/js/app.js',
    alias: 'bundle.js',
    output: 'dist/bundle.js',
    transform: 'reactify'
  },
	server: {
		st: {
			path: relPath('dist'),
            index: 'index.html',
			cache: false
		},
		port: 8000,
        open: true,
        path: '/'
	}
};

gulp.task('browserify', function() {
  delete configAtomify.server;
  atomify(configAtomify);
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['copy', 'browserify']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('serve', ['copy'], function() {
  configAtomify.js.debug = true;
  atomify(configAtomify);
});
