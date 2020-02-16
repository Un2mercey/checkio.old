var app = angular.module('app', ['ngRoute', 'appControllers', 'appDirectives']);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

function MainPageController($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
    $scope.activeDirective = null;
    $scope.welcomeText = 'Welcome';

    $scope.clearActiveDirective = () => {
        $scope.activeDirective = null;
    }
    
    $scope.changeDirective = (index) => {
        $scope.activeDirective = $scope.listOfDirectives[index];
    }

    $scope.listOfDirectives = [
        {
            name: 'Ground for the house',
            page: 'https://js.checkio.org/ru/mission/ground-for-the-house/',
            url:  '/ground-for-the-house'
        },
        {
            name: 'Most numbers',
            page: 'https://js.checkio.org/ru/mission/most-numbers/',
            url: '/most-numbers',
        },
        {
            name: 'Navigation',
            page: 'https://js.checkio.org/ru/mission/compass-map-and-spyglass/',
            url: '/navigation'
        },
        {
            name: 'The stone wall',
            page: 'https://js.checkio.org/ru/mission/the-stone-wall/',
            url: '/the-stone-wall'
        },
        {
            name: 'Wild dogs',
            page: 'https://js.checkio.org/ru/mission/wild-dogs/',
            url: '/wild-dogs'
        },
    ];
}

appControllers.controller('MainPageController', MainPageController);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/ground-for-the-house', {
            templateUrl: 'pages/ground-for-the-house/ground-for-the-house.html'
    })
        .when('/most-numbers', {
            templateUrl: 'pages/most-numbers/most-numbers.html'
    })
        .when('/navigation', {
            templateUrl: 'pages/navigation/navigation.html'
    })
        .when('/the-stone-wall', {
            templateUrl: 'pages/the-stone-wall/the-stone-wall.html'
    })
        .when('/wild-dogs', {
            templateUrl: 'pages/wild-dogs/wild-dogs.html'
    })
    ;

    $locationProvider.html5Mode(true);
});