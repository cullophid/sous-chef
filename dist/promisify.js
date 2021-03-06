// Generated by CoffeeScript 1.10.0
(function() {
  var slice = [].slice;

  module.exports = function(f) {
    return function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return new Promise(function(resolve, reject) {
        return f.apply(null, slice.call(args).concat([function(err, result) {
            if (err) {
              return reject(err);
            } else {
              return resolve(result);
            }
          }]));
      });
    };
  };

}).call(this);
