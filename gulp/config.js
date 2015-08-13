var src         = 'app';
var build       = 'build';
var development = 'build/development';
var production  = 'build/production';

// dependencies
var pngquant = require('imagemin-pngquant');

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build]
      },
      port: 8000,
      files: [
        development + '/css/*.css',
        development + '/js/*.js',
        development + '/images/**',
        development + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 8001
    }
  },
  delete: {
    src: [development]
  },
  sass: {
    src: src + '/scss/**/*.{sass,scss}',
    dest: development + '/css'
  },
  autoprefixer: {
    browsers: ['last 3 versions', 'ie 8', 'ie 9'],
    cascade: false
  },
  js: {
    src: src + '/javascripts/**/*.js',
    dest: development + '/js'
  },
  bower: {
    cssDest: development + '/css/libs',
    jsDest: development + '/js/libs'
  },
  watch: {
    jade: src + '/layouts/**/*.jade',
    sass: src + '/scss/**/*.{sass,scss}',
    scripts: src + '/javascripts/**/*.js',
    images: src + '/images/**/*',
    sprites: src + '/images/**/*.png',
    fonts: src + '/fonts/**/*.{ttf,eot,woff,woff2,svg}'
  },
  jade: {
    src: src + '/layouts/*.jade',
    dest: development
  },
  images: {
    src: src + '/images/**/*',
    dest: development + '/images'
  },
  base64: {
    src: development + '/css/*.css',
    dest: development + '/css',
    options: {
      baseDir: development + '/images',
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
      maxImageSize: 8*1024, // bytes 
      debug: false
    }
  },
  copyfonts: {
    development: {
      src: src + '/fonts/*',
      dest: development + '/fonts'
    },
    production: {
      src: development + '/fonts/*',
      dest: production + '/fonts'
    }
  },
  copyhtml: {
    src: development + '/*.html',
    dest: production
  },
  optimize: {
    css: {
      src: development + '/css/**/*.css',
      dest: production + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: development + '/js/**/*.js',
      dest: production + '/js/',
      options: {}
    },
    images: {
      src: development + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: production + '/images',
      options: {
        optimizationLevel: 3,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }
    }
  }
};
