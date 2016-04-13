require("angular");
require("angular-mocks");
require("./index.js");

describe('angular-global-resolve', function () {
  beforeEach(angular.mock.module('angular-global-resolve'));
  describe('when it works', function () {
    it('should work!', function () {
      expect(true).toBe(true);
    });
  });
});
