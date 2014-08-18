(function(){

  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch']);

  app.controller('appController', ['$scope', function($scope) {
    console.log('appController started');

    $scope.isBootsShowing = false;

    $scope.boots = function(){
      $scope.isBootsShowing = !$scope.isBootsShowing;
    };

    $scope.feed = [
      {
        name: 'Tooth fairy',
        to: 'Mommy',
        time: '2 minutes ago',
        post: 'Testing this post content. See it works.'
      },
      {
        name: 'Mama Mirabelle',
        to: 'Thomas',
        time: '2 hours ago',
        post: 'Testing this could be dangurous.'
      },
      {
        name: 'Tommy Tangles ',
        to: 'Jimmy',
        time: '2 days ago',
        post: 'Oh nos. I think this might work.'
      }
    ]

  }]);

  FastClick.attach(document.body);

}).call(this);