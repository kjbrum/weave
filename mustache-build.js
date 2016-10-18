const fs = require('fs');
const cp = require('child_process');
const extend = require('util')._extend;

const srcPagesDir = 'src/pages/';
const srcPartialsDir = 'src/partials/';
const srcDataDir = 'src/data/';

// Get an array of all the partials
var getPartialsList = function(dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];

    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = getPartialsList(dir + file + '/', filelist);
        } else {
            filelist.push(dir + file);
        }
    });

    return filelist;
};

// Merge two JSON files
var mergeJSON = (file1, file2) => {
    var obj1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
    var obj2 = JSON.parse(fs.readFileSync(file2, 'utf8'));

    var merged = extend({}, obj1);
    extend(merged, obj2);

    return merged;
}

// Run the `mustache` command to compile our pages
var execute = (item) => {
    // Start building the compiling command
    var command = 'mustache ' + partials;

    // Get the page name
    var name = item.split('.')[0];
    filename = name;

    // Rename the home file to index
    if (name == 'home') {
        filename = 'index';
    }

    // Check for a data file
    if (!fs.existsSync(srcDataDir + name + '.json')) {
        // Create a data file if needed
        fs.writeFile(srcDataDir + name + '.json', '{\n\n}', (err) => {
            if (err) throw err;
        });
    }

    // Merge the data file with the default
    var jsonData = mergeJSON(srcDataDir + 'default.json', srcDataDir + name + '.json');

    // Create a temp file
    var tmpDataFile = srcDataDir + 'default-' + name + '.tmp';
    fs.writeFile(tmpDataFile, JSON.stringify(jsonData), (err) => {
        if (err) throw err;
    });

    // Finish building the compiling command
    command += ' ' + tmpDataFile + ' ' + srcPagesDir + name + '.mustache > dist/' + filename + '.html'

    // Execute the compiling command
    cp.exec(command, (err) => {
        if (err) throw err;

        console.log('Compiled: ' + srcPagesDir + name + '.mustache ==> dist/' + filename + '.html');

        // Remove the temp file
        fs.unlink(tmpDataFile, (err) => {
            if (err) throw err;
        });
    });
};


// ----------------------------------------------- //


// Set up our partial string
var partialsList = getPartialsList(srcPartialsDir);
var partials = '-p ' + partialsList.join(' -p ');

// Loop through and compile all the pages
fs.readdir(__dirname + '/' + srcPagesDir, (err, files) => {
    if (err) throw err;

    files.map(execute);
});
