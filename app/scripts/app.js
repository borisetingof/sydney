'use strict';

/**
 * @ngdoc overview
 * @name sydneyApp
 * @description
 * # sydneyApp
 *
 * Main module of the application.
 */
angular
  .module('sydneyApp', []);



$('.navigation').affix({
  offset: {
    top: function () {
      return $(window).innerHeight() - 130
    }
  }
})

