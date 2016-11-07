'use strict';

// Modules
const critical = require('critical');

// Variables
const distDir = 'dist/';

// Generate our critical CSS file
critical.generate({
    base: distDir,
    src: 'index.html',
    dest: distDir + 'css/critical.css',
    minify: true,
    width: 1200,
    height: 900
});
