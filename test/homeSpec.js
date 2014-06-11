describe("Home Module", function(){

  var scope, httpBackend;

  /**
  * Mock home module.
  */
  beforeEach(angular.mock.module("homeModule"));

  /**
  * Mock home controller.
  */
  beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    httpBackend.when("GET", "/user").respond({ name: "wk"});

    $controller("homeController", { $scope: scope});
  }));

  /**
  * Test message.
  */
  it("should have variable message = 'Hello, world!'", function(){
    expect(scope.message).toBe("Hello, world!");
  });

  it("should fetch user", function(){
    httpBackend.flush();
    expect(scope.user.name).toBe("wk");
  });
});
