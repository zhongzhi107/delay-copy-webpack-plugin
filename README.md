# Delay Copy Webpack plugin

This is a [webpack](http://webpack.github.io/) plugin that copies files to dest position. Compaired with other copy plugins of webpack, it copies files when webpack build process has finished.

 It uses the [glob](https://github.com/isaacs/node-glob) library to do files matching.

## Installation

Install the plugin with npm:
```shell
$ npm install delay-copy-webpack-plugin
```

## Configuration

You can pass a hash of configuration options to `DelayCopyWebpackPlugin`.
Allowed values are as follows:

- `from`: {glob} The original pattern the minimatch object represents.
- `to`: {string} Dest files save path.
- `interval`: {int} (optional) The millisecond number which delay.

## Example

```javascript
//webpack.config.js
new DelayCopyWebpackPlugin({
  from: 'webpack-assets.json',
  to: 'dist/server',
  interval: 2000
}),
```
