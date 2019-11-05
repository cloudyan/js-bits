
// es6
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

// es5
Promise.prototype.finally = function (callback) {
  var P = this.constructor;
  return this.then(function (value) {
    return P.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return P.resolve(callback()).then(function () {
      throw reason;
    });
  });
};
