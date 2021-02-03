/**
 * Oren's First Gulpfile
 * ___
 * TO DO:
 * 1. Create CSS task to concat and minify
 * 2. Update JS task to run eslint
 * 2. Create JS task to concat and minify
 */

// Requirements
var changedInPlace = require('gulp-changed-in-place'),
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    myth = require('gulp-myth'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sasslint = require('gulp-sass-lint');
    // useref = require('gulp-useref'),
    // uglify = require('gulp-uglify'),
    // cssnano = require('gulp-cssnano'),
    // imagemin = require('gulp-imagemin'),
    // cache = require('gulp-cache'),
    // runSequence = require('run-sequence');

// Constants
var JS_FOLDER = '/js',  //eslint-disable-line
    CSS_FOLDER = '/css',
    IMG_FOLDER = '/images',
    assets = 'includes',
    baseStyles = CSS_FOLDER + '/sass',
    compiledStyles = CSS_FOLDER + '/compiled',
// Define relative paths to the application
    localPath = {
        app: '/',
        js: {
            app: assets + JS_FOLDER
        },
        css: {
            sass: assets + baseStyles,
            compiled: assets + compiledStyles
        },
        img: {
            app: assets + IMG_FOLDER
        }
    };

// Local Development Tasks
/**
 * @task: local
 * @sub_tasks: __local:css, __local:js, __local:img
 * @parent_task: default
 * ___
 * Move / process CSS, JavaScript, and images on the local development environment.
 * Files are moved to local Host, Sitecore, and Pattern Library folders.
 * Run before watch task.
 */
gulp.task('local:dev', ['local:css']);//, 'local:img']);

/**
 * @task: local:css
 * @parent_task: local
 * _
 * Move / process CSS on the local development environment.
 */
gulp.task('local:css', function () {
    var local = localPath,
        stream;

    stream = gulp.src(local.css.sass + '/**/*.scss')
        .pipe(plumber())
        // Passes it through a gulp-sass, log errors to console
        .pipe(sass().on('error', sass.logError))
        .pipe(myth())
        .pipe(gulp.dest(local.css.compiled));

    return stream;
});

/**
 * @task: local:js
 * @parent_task: local
 * _
 * Move / process JavaScript on the local development environment.
 * Pattern Library build dependent on COMMON_JS_FILES variable defined above.
 */
// gulp.task('local:js', function () {
//     var local = localPath,
//         stream;

//     stream = gulp.src(local.js.app + '/**/*.js')
//         .pipe(plumber())
//         // Passes it through a gulp-sass, log errors to console
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(local.css.compiled));

//     return stream;
// });

/**
 * @task: local:img
 * @parent_task: local
 * _
 * Move / process images on the local development environment.
 */
gulp.task('local:img', function () {
    var local = localPath;

    gulp.src(local.img.app + '/**/*.*')
        // Only act on file that has been modified
        // .pipe(changed(local.img.app))
        .pipe(gulp.dest(local.img.app));
});

// Watch Tasks
/**
 * @task: watch
 * @sub_tasks: watch:css, watch:js, watch:img, watch:views
 * @parent_task: default
 * _
 * Watch files for changes on save.
 * Move / process CSS, JavaScript, images, and views on the local development environment.
 * Files are moved to local Host, Sitecore, and Pattern Library folders.
 */
gulp.task('watch', function () {
    var local = localPath;

    // Start Jest unit testing watch
    // exec('npm run watch:js:tests', function (err, stdout, stderr) {
    //     console.log(stdout);
    //     console.log(stderr);
    // });

    gulp.watch(local.css.sass + '/**/*.scss', ['watch:css']);
    gulp.watch(local.js.app + '/**/*.js', ['watch:js']);
    // gulp.watch(local.img.app + '/**/*.*', ['watch:img']);
});

/**
 * @task: __watch:js
 * @sub_tasks: __watch:js__lint, __watch:js__compile
 * @parent_task: __watch
 * ___
 * Watch JavaScript files for changes on save.
 */
gulp.task('watch:css', ['watch:css_lint', 'watch:css_compile']);

/**
 * @task: watch:css_lint
 * @parent_task: watch:css
 * ___
 *
 * 
 *
 */
gulp.task('watch:css_lint', function () {
    var local = localPath,
        stream;

    stream = gulp.src(local.css.sass + '/**/*.scss')
        // Do not exit on error
        .pipe(plumber())
        // Only act on file that has been modified
        .pipe(changedInPlace())
        // Run linting on stream
        .pipe(sasslint());

    return stream;
});

/**
 * @task: watch:css_compile
 * @parent_task: watch:css
 * ___
 *
 * 
 *
 */
gulp.task('watch:css_compile', function () {
    var local = localPath,
        stream;

    stream = gulp.src(local.css.sass + '/**/*.scss')
        // Do not exit on error
        .pipe(plumber())
        // Passes it through a gulp-sass, log errors to console
        .pipe(sass().on('error', sass.logError))
        .pipe(myth())
        .pipe(gulp.dest(local.css.compiled));

    return stream;
});

/**
 * @task: __watch:js
 * @sub_tasks: __watch:js__lint, __watch:js__compile
 * @parent_task: __watch
 * ___
 * Watch JavaScript files for changes on save.
 */
gulp.task('watch:js', ['watch:js_lint']);

/**
 * @task: watch:js_lint`
 * @parent_task: watch:js
 * ___
 * Run JavaScript code quality check against a single file on change.
 * This is run against a stricter set of rules than the build.
 * An error here will not necessarily cause a build error, but should be fixed before checking in.
 */
gulp.task('watch:js_lint', function () {
    var local = localPath,
        stream;

    stream = gulp.src(local.js.app + '/**/*.js')
        .pipe(plumber())
        // Passes it through a gulp-sass, log errors to console
        .pipe(eslint({
			fix: true,
		}))
		.pipe(eslint.format());

    return stream;
});

/**
 * @task: __watch:img
 * @parent_task: __watch
 * ___
 * Move / process images on save.
 */
gulp.task('watch:img', function () {
    // var local = localPath;

    // gulp.src(local.img.app + '/**/*.*')
    //     // Only act on file that has been modified
    //     .pipe(changed(local.img.app))
    //     .pipe(gulp.dest(local.img.app))
    //     .pipe(livereload());
});

// Production Tasks
/**
 * @task: prod:production
 * @sub_tasks: prod:css, prod:js, prod:img
 * @parent_task: build:production
 * ___
 * Move / process local asset files and start watch for changes on save.
 */
gulp.task('local:production', ['prod:css', 'prod:js', 'prod:img']);

/**
 * @task: prod:css
 * @parent_task: local:production
 * _
 * Move / process CSS on the local development environment.
 */
gulp.task('prod:css', function () {
    var local = localPath;

    gulp.src(local.css.sass + '/**/*.scss')
        .pipe(sasslint())
        .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
        .pipe(gulp.dest(local.css.compiled));
});

/**
 * @task: prod:js
 * @parent_task: local:production
 * _
 * Move / process JavaScript on the local development environment.
 * Pattern Library build dependent on COMMON_JS_FILES variable defined above.
 */
gulp.task('prod:js', function () {
    var local = localPath;

    // Copy JS
    gulp.src(local.js.app + '/**/*.js')
        .pipe(eslint({
        	fix: true
        }))
        .pipe(eslint.format())
        .pipe(gulp.dest(local.js.compiled));
});

/**
 * @task: prod:img
 * @parent_task: local:production
 * _
 * Move / process images on the local development environment.
 */
gulp.task('prod:img', function () {
    var local = localPath;

    gulp.src(local.img.app + '/**/*.*')
        // Only act on file that has been modified
        // .pipe(changed(local.img.app))
        .pipe(gulp.dest(local.img.app));
});

// Parent Tasks
/**
 * @task: default
 * @sub_tasks: local, watch
 * ___
 * Move / process local asset files and start watch for changes on save.
 */
gulp.task('default', ['local:dev', 'watch']);

/**
 * @task: build:production
 * @sub_tasks: local:production
 * ___
 * Move / process local asset files, minify and uglify for production.
 */
gulp.task('build:production', ['local:production']);
