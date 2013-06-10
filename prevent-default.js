
var slice = Array.prototype.slice;

module.exports = function preventDefault(listener) {
  return function(e) {
    e.preventDefault();
    var ret = listener.apply(this, slice.call(arguments));
    return ret === false ? false : ret;
  }
};