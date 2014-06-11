describe("Home Module", function(){

  var scope = null;

  /**
  * Mock home module.
  */
  beforeEach(angular.mock.module("homeModule"));

  /**
  * Mock home controller.
  */
  beforeEach(angular.mock.inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    $controller("homeController", { $scope: scope});
  }));

  /**
  * Test message.
  */
  it("should have variable message = 'Hello, world!'", function(){
    expect(scope.message).toBe("Hello, world!");
  });
});
