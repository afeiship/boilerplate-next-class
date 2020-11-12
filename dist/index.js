/*!
 * name: @boilerplate-scope/next-boilerplate-class
 * description: next-boilerplate-class-description
 * homepage: https://github.com/afeiship/next-boilerplate-class
 * version: 1.0.0
 * date: 2020-11-12T13:45:40.411Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxBoilerplateClass = nx.declare('nx.BoilerplateClass', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBoilerplateClass;
  }
})();
