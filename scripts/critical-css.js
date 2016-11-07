'use strict';

// Modules
const critical = require('critical');

// Variables
const distDir = 'dist/';
const criticalFilePath = distDir + 'css/critical.css';

// Generate our critical CSS file
critical.generate({
    base: distDir,
    src: 'index.html',
    dest: criticalFilePath,
    minify: true,
    width: 1200,
    height: 900
});
