var fs = require('fs');
var path = require('path');

process.env.NODE_ENV = 'development';

require('dotenv').config({silent: true});

var chalk = require('chalk');
var appPath = require('inferno-scripts/config/paths').appPath;
var webpackMonkeyPath = path.resolve(appPath, 'webpack.monkey.js');
var webpackConfig = require('inferno-scripts/config/webpack.config.dev');

if (fs.existsSync(webpackMonkeyPath)) {
    console.log(chalk.yellow('WARNING! You are using modified webpack config!'));
    require(webpackMonkeyPath)(webpackConfig, true);
}
require('inferno-scripts/scripts/start');
