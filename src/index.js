(function() {
  var global = window || global || this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxBoilerplateClass = nx.declare('nx.BoilerplateClass', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBoilerplateClass;
  }
})();
