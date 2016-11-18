'use strict';

describe('Controller: LatesthousevotesCtrl', function () {

  // load the controller's module
  beforeEach(module('govtrackApp'));

  var LatesthousevotesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatesthousevotesCtrl = $controller('LatesthousevotesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatesthousevotesCtrl.awesomeThings.length).toBe(3);
  });
});
