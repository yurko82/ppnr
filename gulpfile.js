const ttf2woffGulp = require('gulp-ttf2woff');

let project_folder = "_dist";
let fs = require('fs');

let path = {
  build: {
    html: project_folder+'/',
    css: project_folder+'/css/',
    js: project_folder+'/js/',
    img: project_folder+'/img/',
    fonts: project_folder+'/fonts/'
  },
  src: {
    html: ['/*.html', '!/_*.html'],
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

// https://www.youtube.com/watch?v=stFOy0Noahg
// npm i browser-sync --save-dev
// npm i gulp-file-include --save-dev
// npm i del --save-dev
// npm i gulp-sass --save-dev
// npm i gulp-group-css-media-queries --save-dev
// npm i gulp-clean-css --save-dev  // not use here
// npm i gulp-rename --save-dev  // not use here
// npm i gulp-autoprefixer --save-dev  // not use here
// npm i gulp-uglify-js --save-dev  // not use here
// npm i gulp-imagemin --save-dev  
// npm i gulp-webp --save-dev 
// npm i gulp-webp-html --save-dev 
// npm i gulp-webpcss --save-dev 
// npm i gulp-svg-sprite --save-dev  // not use here
// npm i gulp-ttf2woff gulp-ttf2woff2 --save-dev
// npm i gulp-fonter --save-dev 

let {src,dest, parallel}=require('gulp'),
    gulp=require('gulp'),
    browsersync=require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),  //in html: @@include('_header.html') -> separate file
    del = require('del'),
    scss = require('gulp-sass'),
    group_media = require('gulp-group-css-media-queries'),
    // clean_css = require('gulp-clean-css'),
    // autoprefixer = require('gulp-autoprefixer'),
    // rename = require('gulp-rename'),
    // uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    webpcss = require('gulp-webpcss'),
    // svgSprite = require('gulp-svg-sprite'),
    tt2woff = require('gulp-ttf2woff'),
    tt2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),


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
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(){
  return src(path.src.css)
    .pipe(scss({
      outputStyle:"expanded"
    }))
    .pipe(group_media())
    // .pipe(autoprefixer({
    //   overrideBrowserslist:['last 5 versions'],
    //   cascade:true
    // }))
    .pipe(webpcss())
    //.pipe(dest(path.build.css))
    //.pipe(clean_css())
    //.pipe(rename({extname:'.min.css'}))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js(){
  return src(path.src.js)
    .pipe(fileinclude())
    // .pipe(dest(path.build.js))
    // .pipe(uglify())
    // .pipe(rename({extname:'.min.js'}))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images(){
  return src(path.src.img)
    .pipe(webp({
      quality: 70
    }))
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(imagemin({
      progressive:true,
      svgoPlugins:[{removeViewBox: false}],
      interlaced: true,
      optiomizationLevel: 3  // 0 to 7
    }))
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

// gulp.task('svgSprite', function(){
//   return gulp.src(['/icons/*.svg'])
//   .pipe(svgSprite({
//     mode:{
//       stack:{
//         sprite:'../icons/icons.svg'
//       }
//     }
//   }))
//   .pipe(dest(path.build.img))
// }) 

gulp.task('otf2ttf', function(){
  return src(['/fonts/*.otf'])
  .pipe(fonter({
    formats: ['ttf']
  }))
  .pipe(dest('/fonts/'));
})

function fonts(params){
  src(path.src.fonts)
  .pipe(ttf2woff())
  .pipe(dest(path.buils.fonts));
  return src(path.src.fonts)
  .pipe(ttf2woff2())
  .pipe(dest(path.buils.fonts));
}

function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb(){

}

function watchFiles(params) {
  gulp.watch([path.watch.html],html);
  gulp.watch([path.watch.css],css);
  gulp.watch([path.watch.js],js);
  gulp.watch([path.watch.img],images);
}

function clean(params){
  return del(path.clean);
}

let watch = gulp.parallel('build, watchFiles, browserSync');
let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
  
exports.default = defaultTask; //or 'watch'
exports.watch=watch;
exports.build=build;
exports.html=html;
exports.css=css;
exports.js=js;
exports.images=images;
exports.fonts=fonts;
exports.fontsStyle=fontsStyle;