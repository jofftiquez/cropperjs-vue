const path = require('path');
const webpack = require('webpack');

function createConfig(target) {
  var name = 'index.js';

  if(target !== 'commonjs2') {
    name = 'cropperjs-vue.js'
  }

  var output = {
    library: 'CropperJsVue',
    libraryTarget: target,
    path: path.resolve(__dirname, 'dist'),
    filename: name
  }

  if(typeof target === 'undefined') {
    name = 'cropperjs-vue.js';
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: name
    }
  }

  return {
    name: target,
    entry: './src',
    output: output,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }
}

module.exports = [
  createConfig('var'),
  createConfig('commonjs2')
]