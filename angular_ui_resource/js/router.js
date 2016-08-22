(function() {
    "use strict";
    angular.module("health").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
                url: '/',
                // params: {
                //     naieem:"Hello world",
                // },
                // templateUrl: 'templates/home.html',
                //controller: "homeCtrl as home",
                views: {
                    "menu": {
                        templateUrl: "templates/menu.html"
                    },
                    "content": {
                        templateUrl: "templates/home.html",
                        controller: "homeCtrl as home",
                        resolve: {
                            users: ['UserService',
                                function(UserService) {
                                    return UserService.get();
                                }
                            ]
                        },
                    },
                    //     // "viewB": {
                    //     //     template: "index.viewB"
                    //     // }
                }
            })
            .state('home.naieem', {
                url: 'home/naieem',
                // params: {
                //     naieem:"Hello world",
                // },
                templateUrl: 'templates/home_nested.html',
                //controller: "homeCtrl as home",
                // views: {
                //     "menu": {
                //         templateUrl: "templates/menu.html"
                //     },
                //     "content": {
                //         templateUrl: "templates/home.html",
                //         controller: "homeCtrl as home",
                //     },
                //     //     // "viewB": {
                //     //     //     template: "index.viewB"
                //     //     // }
                // }
            })
            .state('param', {
                url: '/params/:naieem/:hi',
                // params: {
                //     naieem:"Hello world",
                // },
                templateUrl: 'templates/home.html',
                controller: "homeCtrl as home"
            })
            .state('profile', {
                url: '/profile',
                views: {
                    "menu": {
                        templateUrl: "templates/menu.html"
                    },
                    "content": {
                        templateUrl: "templates/profile.html",
                        controller: "prflCtrl",
                    },
                    //     // "viewB": {
                    //     //     template: "index.viewB"
                    //     // }
                }
            })
            .state('account', {
                url: '/account',
                views: {
                    "menu": {
                        templateUrl: "templates/menu.html"
                    },
                    "content": {
                        templateUrl: "templates/account.html",
                        controller: "accCtrl",
                    },
                    //     // "viewB": {
                    //     //     template: "index.viewB"
                    //     // }
                }
            });

        $urlRouterProvider.otherwise('/');
    });

})();
