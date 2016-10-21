angular.module('goodNews', ['ngRoute', 'templates']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'fights.template.html',
        controller: 'FightsController',
        controllerAs: 'fightsCtrl'
    }).when('/fights/:fightId', {
        templateUrl: 'fight.template.html', // watch the 's'
        controller: 'FightController',
        controllerAs: 'fightCtrl'
    }).when('/fights', { //note same as above, JIC
        templateUrl: 'fights.template.html',
        controller: 'FightsController',
        controllerAs: 'fightsCtrl'
    }).otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
}
