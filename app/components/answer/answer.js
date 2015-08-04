/**
 * Answer Components module.
 *
 * @module PATQ.components.answer
 */
(function () {
  'use strict';

  angular
    .module('PATQ.components.answer', [])
    .controller('AnswerController', AnswerController);

  AnswerController.$inject = [];

  /**
   * AnswerController
   *
   * @class AnswerController
   * @constructor
   */
  function AnswerController() {
  	console.log('AnswerController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AnswerController.prototype.activate = function() {
  	console.log('AnswerController activate Method');
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
