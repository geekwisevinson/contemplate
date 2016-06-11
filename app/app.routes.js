angular.module('app')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'states/home/home.html'
            })
            .state('home.child',{
                url:'/child',
                templateUrl: "states/home/child/child.html"
            })
    }
);
