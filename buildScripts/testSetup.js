//register babel to transpile before our test run
require('babel-register')()
// desible webpack feature mocha doesnt understand
require.extensions['.css'] = function () { }
