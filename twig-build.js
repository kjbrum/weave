// Modules
const fs = require('fs');
const extend = require('util')._extend;
const Twig = require('twig');

// Variables
const srcPagesDir = 'src/pages/';
const srcPartialsDir = 'src/partials/';
const srcDataDir = 'src/data/';
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
var execute = (item) => {
    var page = item.split('.')[0];
    var filename = page;

    // Rename the home file to index
    if (page == 'home') {
        filename = 'index';
    }

    var data = mergeJSON(srcDataDir + 'default.json', srcDataDir + page + '.json');

    Twig.renderFile(srcPagesDir + page + '.twig', data, (err, html) => {
        fs.writeFile(distDir + filename + '.html', html, (err) => {
            if (err) throw err;
        });
    });
};


// // ----------------------------------------------- //


// Loop through and compile all the pages
fs.readdir(__dirname + '/' + srcPagesDir, (err, files) => {
    if (err) throw err;
    files.map(execute);
});
