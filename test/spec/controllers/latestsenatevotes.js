'use strict';

describe('Controller: LatestsenatevotesCtrl', function () {

  // load the controller's module
  beforeEach(module('govtrackApp'));

  var LatestsenatevotesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatestsenatevotesCtrl = $controller('LatestsenatevotesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatestsenatevotesCtrl.awesomeThings.length).toBe(3);
  });
});
