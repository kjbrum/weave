'use strict';

// Modules
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');

// Variables
const srcImgDir = 'src/img/';
const distImgDir = 'dist/img/';

// Optimize the images
imagemin([srcImgDir + '*.{jpg,jpeg,gif,png}'], distImgDir, {
    plugins: [
        imageminJpegtran(),
        imageminGifsicle(),
        imageminPngquant({quality: '60-75'})
    ]
});
