module.exports = function preventDefault(listener) {
  return function(ev) {
    ev.preventDefault();
    return listener.call(this, ev) === true;
  }
};