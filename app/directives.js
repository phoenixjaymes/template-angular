/* 
 File     : directives.js
 Date     : Sep 28, 2016
 Author   : Jaymes Young <jaymes@phoenixjaymes.com>
 */

'use strict';

angular.module('generic')
  .directive('home', function() {
    return {
      templateUrl : 'app/views/home.html'
    };
  });
  
  
