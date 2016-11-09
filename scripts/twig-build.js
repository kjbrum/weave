'use strict';

// Modules
const fs = require('fs');
const extend = require('util')._extend;
const Twig = require('twig');
const beautify = require('js-beautify');

// Variables
const srcDir = 'src/';
const srcPagesDir = srcDir + 'pages/';
const srcPartialsDir = srcDir + 'partials/';
const srcDataDir = srcDir + 'data/';
const distDir = 'dist/';

// Merge two JSON files
var mergeJSON = (file1, file2) => {
    var obj1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
    var obj2 = JSON.parse(fs.readFileSync(file2, 'utf8'));

    var merged = extend({}, obj1);
    extend(merged, obj2);

    return merged;
}

// Compile our pages using Twig
var compileTwigTemplate = (item) => {
    var page = item.split('.')[0];
    var filename = page;

    // Rename the home file to index
    if (page == 'home') {
        filename = 'index';
    }

    // Merge our data files
    var data = mergeJSON(srcDataDir + 'default.json', srcDataDir + page + '.json');

    // Compile the Twig files
    Twig.renderFile(srcPagesDir + page + '.twig', data, (err, html) => {
        var prettyHTML = beautify.html(html, { indent_size: 4 });

        // Create the new compiled HTML file
        fs.writeFile(distDir + filename + '.html', prettyHTML, (err) => {
            if (err) throw err;
        });
    });
};


// ----------------------------------------------- //


// Loop through and compile all the pages
fs.readdir(srcPagesDir, (err, files) => {
    if (err) throw err;
    files.map(compileTwigTemplate);
});
