const path = require('path');
const express = require('express');

module.exports = {
  // for this app, we have a single entry point, this is the file that webpack will start to analyze as it begins to build out the dependency graph (https://webpack.js.org/concepts/dependency-graph/)
  // https://webpack.js.org/concepts/entry-points/
  entry: {
    src: './client/index.js',
  },
  // here we define the file name and directory of the file of bundled/transpiled/minified/uglified code that the command 'npm run build' will create in our filesystem (https://webpack.js.org/concepts/#output)
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // the mode we are running ('production' or 'development') will be determined by the command we use in the terminal, checkout the npm run build and npm run dev scripts in the package.json to see how 'process.env.NODE_ENV' is assigned
  // https://webpack.js.org/concepts/#mode
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        // https://webpack.js.org/concepts/#loaders
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        // here we specify the node modules we want to use to transpile the .css & .scss files
        test: /\.css/,
        use: [
          'style-loader', 'css-loader'
        ],
      },
    ],
  },
  // configuration options for our dev server running on 'http://localhost:8080'
  devServer: {
    // The bundled files will be available in the browser under this path. By default this is just '/' but since our output.filename is 'bundle.js' and thats in the /build dir we need to specify publicPath. Now bundle.js will be available at http://localhost:8080/build/bundle.js
    publicPath: '/build',
    // means that when we're running our dev server, any request made to '/api' (ie: the fetch request made to '/api/leaders' in Leaders.js) will be made to http://localhost:3000/api/leaders instead of http://localhost:8080/api/leaders (what the request would be made to if we didn't set up this proxy)
    // https://webpack.js.org/configuration/dev-server/#devserverproxy
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
};
