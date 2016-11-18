'use strict';

describe('Controller: LatestbillsCtrl', function () {

  // load the controller's module
  beforeEach(module('govtrackApp'));

  var LatestbillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatestbillsCtrl = $controller('LatestbillsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatestbillsCtrl.awesomeThings.length).toBe(3);
  });
});
