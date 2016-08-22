(function(){
  angular.module("health", ['ui.router']);
})();

(function() {
    "use strict";
    angular.module("health").controller("homeCtrl", homeCtrl);
    angular.module("health").controller("prflCtrl", prflCtrl);
    angular.module("health").controller("accCtrl", accCtrl);
    homeCtrl.$inject = ['$scope', '$stateParams', '$log'];

    function homeCtrl($scope, $stateParams, $log) {
        /* jshint validthis: true */
        var vm = this;
        //vm.hi = $stateParams.hi;
        //vm.naieem = $stateParams.naieem;
        vm.items = ["A", "List", "Of", "Items"];
        vm.add = add;
        //debugger;
        vm.item = "naieem";
        //$scope.item = "";
        // console.log(this.hi);
        // console.log(this.naieem);
        function add() {
            //debugger;//
            // if ($scope.item == "") {
            //$scope.items.push($scope.item);
            //console.log(this.name);
            // }
            // else {
            //console.log($scope.item);
            //this.name = $scope.item;
            if (this.name != '') {
                this.items.push(this.name);
            } else {
                console.log("this is empty");
            }
            //}
        }
    }

    function prflCtrl() {
        this.name = "naieem";
    }

    function accCtrl() {
        this.name = "naieem";
    }
})();

(function() {
    "use strict";
    angular.module("health").config(function($stateProvider, $urlRouterProvider,$locationProvider) {
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
                    },
                    //     // "viewB": {
                    //     //     template: "index.viewB"
                    //     // }
                }
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
