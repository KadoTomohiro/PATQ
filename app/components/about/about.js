/**
 * About Components module.
 *
 * @module PATQ.components.about
 */
(function () {
  'use strict';

  angular
    .module('PATQ.components.about', [
      'PATQ.service.gruntfiles'
    ])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function AboutController(GruntfilesService) {
    console.log('AboutController Constructor');
  
    this.GruntfilesService = GruntfilesService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AboutController.prototype.activate = function() {
    console.log('AboutController Method activate');

    vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
  };
  
  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  /**
   * Setting the retrieved Gruntfile list to ViewModel
   *
   * @method setlist
   * @param list {Object} Gruntfile list
   * @private
   */
  var setlist = function (list) {
    vm.list = list;
  };

  /**
   * It will capture the error at the time of Gruntfile data acquisition
   * 
   * @method error
   * @param e {Object} error message
   * @private
   */
  var error = function (e) {
    vm.error = e;
  };
})();
