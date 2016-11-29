module.exports = function preventDefault(listener) {
  return function(ev) {
    ev.preventDefault();
    return typeof listener === 'function' && listener.call(this, ev) === true;
  };
};
