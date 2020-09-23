let project_folder = "_dist";
let path = {
  build: {
    html: project_folder+'/',
    css: project_folder+'/css/',
    js: project_folder+'/js/',
    img: project_folder+'/img/',
    fonts: project_folder+'/fonts/'
  },
  src: {
    html: '/*.html',
    css: '{css,scss}/**/*.{css,scss}',
     js: 'js/**/*.js',
    img: 'img/**/*.{svg,png,jpeg,gif,ico,webp}',
    fonts: 'fonts/*.ttf'
  },
  watch: {
    html: '/**/*.html',
    css: '{css,scss}/**/*.{css,scss}',
     js: 'js/**/*.js',
    img: 'img/**/*.{svg,png,jpeg,gif,ico,webp}'
  },
  clean: './'+project_folder+'/'
}

// npm i browser-sync --save-dev

let {src,dest, parallel}=require('gulp'),
    gulp=require('gulp'),
    browsersync=require('browser-sync').create(),
    watch = gulp.parallel('browserSync'),
    build = gulp.series(html);

function browserSync(params){
  browsersync.init({
    server:{
      baseDir:'./'+project_folder+'/'
    },
    port: 3000,
    notify: false
  })
}    

function html(){
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
exports.default = defaultTask; //or 'watch'
exports.watch=watch;
exports.build=build;
exports.html=html;
