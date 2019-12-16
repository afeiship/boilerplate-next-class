/*!
 * name: @feizheng/next-boilerplate-class
 * description: next-boilerplate-class-description
 * url: https://github.com/afeiship/next-boilerplate-class
 * version: 1.0.0
 * date: 2019-12-17 00:00:00
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxBoilerplateClass = nx.declare('nx.BoilerplateClass', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBoilerplateClass;
  }
})();

//# sourceMappingURL=next-boilerplate-class.js.map
