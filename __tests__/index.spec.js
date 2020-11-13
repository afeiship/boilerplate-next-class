(function() {
  var nx = require('@jswork/next');
  var NxBoilerplateClass = require('../src/index');

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
