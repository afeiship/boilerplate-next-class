(function() {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { context: global };

  var NxBoilerplateClass = nx.declare('nx.BoilerplateClass', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, defaults, inOptions);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBoilerplateClass;
  }
})();
