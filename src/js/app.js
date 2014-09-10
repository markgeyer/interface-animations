(function(){

  angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch'])


  // Router setup
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'e0.html',
        controller: 'exerciseZeroController'
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
      .when('/4', {
        templateUrl: 'e4.html',
        controller: 'exerciseFourController'
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






  // e0 controller, welcome :)
  .controller('exerciseZeroController', ['$scope', function ($scope) {}])






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

    $scope.violet = function(){
      $scope.isGood = !$scope.isGood;
    };

  }])






  // e3 controller
  .controller('exerciseThreeController', ['$scope', function ($scope) {
    console.log('exerciseThreeController started');





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

  }])






  // e4 controller
  .controller('exerciseFourController', ['$scope', function ($scope) {
    console.log('exerciseFourController started');

  }]);



  window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);

}).call(this);