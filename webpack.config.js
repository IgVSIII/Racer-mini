const path = require('path');
module.exports = {
    entry: './app/front/app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    }
};