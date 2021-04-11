const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlMin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

function minifyHTML() {
	return gulp
		.src("./src/*.html")
		.pipe(
			htmlMin({
				collapseWhitespace: true,
				removeComments: true
			})
		)
		.pipe(gulp.dest("./dist/"));
}

function style() {
	return gulp
		.src("./src/sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest("./dist/css"))
		.pipe(browserSync.stream());
}

function copyImages() {
	return gulp.src("./src/img/*").pipe(gulp.dest("./dist/img"));
}

function copyIcons() {
	return gulp.src("./src/icons/**/*").pipe(gulp.dest("./dist/icons"));
}

function copyDocs() {
	return gulp.src("./src/docs/*").pipe(gulp.dest("./dist/docs"));
}

function copyJS() {
	// NOTE: not transpiling and minifying my Javascript in this project
	return (
		gulp
			.src("./src/js/*.js")
			.pipe(gulp.dest("./dist/js"))
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		},
		browser: "chrome",
		open: false // NOTE: depuis mon utilisation de linux, c'est ligne est très important à ajouter
	});
	gulp.watch("./src/*.html", minifyHTML);
	gulp.watch("./src/sass/**/*.scss", style);
	gulp.watch("./src/img/*", copyImages);
	gulp.watch("./src/js/*.js", copyJS);
	gulp.watch("./src/*.html").on("change", browserSync.reload);
	// no need to watch copydocs
	gulp.watch("./src/js/index.js").on("change", browserSync.reload);
}

exports.minifyHTML = minifyHTML;
exports.style = style;
exports.copyImages = copyImages;
exports.copyJS = copyJS;
exports.copyIcons = copyIcons;
exports.copyDocs = copyDocs;
exports.watch = watch;
