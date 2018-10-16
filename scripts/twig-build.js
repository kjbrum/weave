'use strict';

// Modules
const fs = require('fs');
const glob = require('glob');
const extend = require('util')._extend;
const Twig = require('twig');
const beautify = require('js-beautify');

// Variables
const srcDir = 'src/';
const srcPagesDir = srcDir + 'pages/';
const srcPartialsDir = srcDir + 'partials/';
const srcDataDir = srcDir + 'data/';
const buildDir = 'build/';

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
    var path = item.substring(0, item.lastIndexOf('/') + 1);
    var filename = item.substring(item.lastIndexOf('/') + 1);
    var page = filename.split('.')[0];
    var filename = page;
    var newbuildDir = path.replace(srcPagesDir, buildDir);
    var dataFile = path.replace(srcPagesDir, srcDataDir) + page + '.json'

    // Rename the home file to index
    if (page == 'home') {
        filename = 'index';
    }

    // Merge our data files, if needed
    var data = {};
    if (fs.existsSync(dataFile)) {
        data = mergeJSON(srcDataDir + 'default.json', dataFile);
    } else {
        data = JSON.parse(fs.readFileSync(srcDataDir + 'default.json', 'utf8'));
    }

    // Create the directory structure
    if (!fs.existsSync(newbuildDir)) {
        fs.mkdir(newbuildDir);
    }

    // Compile the Twig files
    Twig.renderFile(item, data, (err, html) => {
        var prettyHTML = beautify.html(html, { indent_size: 4 });

        // Create the new compiled HTML file
        fs.writeFile(newbuildDir + filename + '.html', prettyHTML, (err) => {
            if (err) throw err;
        });
    });
};

// Loop through and compile all the pages
glob(srcPagesDir + '**/*.twig', (err, files) => {
    files.map(compileTwigTemplate);
});
