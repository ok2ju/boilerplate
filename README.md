# Boilerplate
[![devDependency Status](https://david-dm.org/ok2ju/boilerplate/dev-status.svg)](https://david-dm.org/ok2ju/boilerplate#info=devDependencies)

Boilerplate for front-end development.
This boilerplate based on Stefan's Imhoff series of articles [Introduction to Gulp.js](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)

## Installation

1.Open terminal and run

    cd boilerplate && npm install

to install all npm dependencies.

2.Run

    bower install

to install bower dependencies such as normalize.css and jQuery. If you don't need it just remove this dependencies from bower.json.

## Start

For development run:

    gulp

this task will:
  - compile sass at `buld/development/css` folder
  - prefix css rules with autoprefixer
  - compile jade at `build/development/` folder
  - copy all fonts from `app/fonts` to `build/development/fonts` folder
  - copy all images from `app/images` to `build/development/images`
  - concat all js files from `app/javascripts` to `build/development/js/main.js`
  - run browserSync server to serve `buld/development` folder
  - watch to any changes at app folder

When development done run

    gulp publish

this task will:
  - run browserSync server to serve `build/production folder`
  - copy all fonts `build/development/fonts` to `buld/production folder`
  - minify and copy js files from `build/development/js` to `build/production/js folder`
  - minify and copy css filed from `build/development/css` to `build/production/css folder`
  - optimize and copy all images from `build/development/images` to `build/production/images` folder
  - replace a lot of URLs to small images with Base64 encoded images
  
## Configuration

All paths and properties you can find at `gulp/config.js` folder.
