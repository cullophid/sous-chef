// Generated by CoffeeScript 1.10.0
(function() {
  var Git;

  Git = require('nodegit');

  exports.clone = function(repo) {
    return function() {
      return Git.Clone(repo, '__tmp__');
    };
  };

}).call(this);
