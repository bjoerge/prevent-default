module.exports = function preventDefault(listener) {
  return function(ev) {
    e.preventDefault();
    return listener.call(this, ev) === true;
  }
};