(function(){
  'use strict';

  describe('Controller: CreateController', function () {

    beforeEach(module('PATQ.components.create'));

    var CreateController;

    beforeEach(inject(function ($controller) {
      CreateController = $controller('CreateController');
    }));

    describe('CreateController',function(){
      it('Test Case', function () {
        CreateController.activate();
      });
    });
  });
})();