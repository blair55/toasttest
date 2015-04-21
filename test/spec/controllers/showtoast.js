'use strict';

describe('Controller: ShowtoastCtrl', function () {

  // load the controller's module
  beforeEach(module('toasttestApp'));

  var ShowtoastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowtoastCtrl = $controller('ShowtoastCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
