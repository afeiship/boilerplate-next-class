(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxBoilerplateClass = require('../src/next-boilerplate-class');

  describe('NxBoilerplateClass.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
