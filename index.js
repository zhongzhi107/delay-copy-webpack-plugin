/**
 *
 * 更多文件匹配规则
 * @see https://github.com/isaacs/node-glob
 */
'use strict';

var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
var packingGlob = require('packing-glob');

function DelayCopyWebpack(options) {
  this.options = options;
}

DelayCopyWebpack.prototype.apply = function (compiler) {
  var self = this;
  compiler.plugin('done', function (stats) {
    setTimeout(function() {
      packingGlob(self.options.from).forEach(function(file) {
        var from = path.resolve(process.cwd(), file);
        var to = path.resolve(process.cwd(), self.options.to, file);
        if (fs.existsSync(from)) {
          fse.copySync(from, to);
          console.log(from + ' --> ' + to + ' copied');
        } else {
          console.warn(from + ' not found');
        }
      });
    }, self.interval);
  });
};

module.exports = DelayCopyWebpack;
