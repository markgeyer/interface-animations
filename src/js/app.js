(function(){

  angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch'])


  // Router setup
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'e0.html'
      })
      .when('/1', {
        templateUrl: 'e1.html',
        controller: 'exerciseOneController'
      })
      .when('/2', {
        templateUrl: 'e2.html',
        controller: 'exerciseTwoController'
      })
      .when('/3', {
        templateUrl: 'e3.html',
        controller: 'exerciseThreeController'
      })
      .otherwise({ redirectTo: '/' });
  }])






  // Start
  .controller('startController', ['$scope', '$location', function ($scope, $location) {
    console.log('startController started');

    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.isMenuShowing = true;

    $scope.closeExerciseMenu = function(){
      if(window.innerWidth <= 600) {
        $scope.isMenuShowing = false;
      }
    };

    $scope.toggleExerciseMenu = function(){
      $scope.isMenuShowing = !$scope.isMenuShowing;
    };

    $(window).resize(function(){
      $scope.$apply(function() {
        if(window.innerWidth >= 600) {
          $scope.isMenuShowing = true;
        } else {
          $scope.isMenuShowing = false;
        }
      });
    });

  }])






  // e1 controller
  .controller('exerciseOneController', ['$scope', function ($scope) {
    console.log('exerciseOneController started');

    $scope.orange = function(){
      $scope.isOrange = !$scope.isOrange;
    };

  }])






  // e2 controller
  .controller('exerciseTwoController', ['$scope', function ($scope) {
    console.log('exerciseTwoController started');

    $scope.isPageOne = true;
    $scope.isPageTwo = false;

    $scope.toPageOne = function() {
      $scope.isPageOne = true;
      $scope.isPageTwo = false;
    };

    $scope.toPageTwo = function() {
      $scope.isPageOne = false;
      $scope.isPageTwo = true;
    };


  }])






  // e3 controller
  .controller('exerciseThreeController', ['$scope', function ($scope) {
    console.log('exerciseThreeController started');



    $scope.transformers = [
      { name: 'Brawl' },
      { name: 'Breakdown' },
      { name: 'Megatron' },
      { name: 'Shockwave' },
      { name: 'Skywarp' },
      { name: 'Soundwave' },
      { name: 'Starscream' },
      { name: 'Thundercracker' },
      { name: 'Arcee' },
      { name: 'Bumblebee' },
      { name: 'Ironhide' },
      { name: 'Jazz' },
      { name: 'Jetfire' },
      { name: 'Optimus Prime' },
      { name: 'Ratchet' },
      { name: 'Seibertron' },
      { name: 'Sideswipe' },
      { name: 'Silverbolt' },
      { name: 'Warpath' }
    ]

  }])






  window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);

}).call(this);