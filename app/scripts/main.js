/**
 * This is PATQ module.
 *
 * @module PATQ
 */
(function() {
  'use strict';

  angular
    .module('PATQ', [
      'ngNewRouter',
      'PATQ.config',
      'PATQ.components.home',
      'PATQ.components.about',
      'PATQ.components.contact',
      'PATQ.components.answer',
      'PATQ.components.create',
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',       redirectTo: '/home' },
    { path: '/home',    component: 'home' },
    { path: '/about',   component: 'about' },
    { path: '/contact', component: 'contact' },
    { path: '/answer', component: 'answer' },
    { path: '/create', component: 'create' },
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main PATQ
   * @constructor
   */
  function AppController () {}
})();
