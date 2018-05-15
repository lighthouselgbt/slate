const gulp = require('gulp'),
      awspublish = require('gulp-awspublish');

gulp.task('deploy', () => {

  const publisher = awspublish.create({
    region: 'us-east-1',
    params: {
      Bucket: 'lighthouse-docs-api'
    }
  }, {
    cacheFileName: ' .awspublish-lighthouse-docs-api'
  });

  // define custom headers
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
    // ...
  };

  return gulp.src('./build/**/*')
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
