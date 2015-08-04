/**
 * Create Components module.
 *
 * @module PATQ.components.create
 */
(function () {
  'use strict';

  angular
    .module('PATQ.components.create', [])
    .controller('CreateController', CreateController);

  CreateController.$inject = [];

  /**
   * CreateController
   *
   * @class CreateController
   * @constructor
   */
  function CreateController() {
  	console.log('CreateController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CreateController.prototype.activate = function() {
  	console.log('CreateController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   * 
   * @property vm
   * @type {Object}
   */
  var vm;
})();
