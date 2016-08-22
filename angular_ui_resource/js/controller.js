(function() {
    "use strict";
    angular.module("health").controller("homeCtrl", homeCtrl);
    angular.module("health").controller("prflCtrl", prflCtrl);
    angular.module("health").controller("accCtrl", accCtrl);
    homeCtrl.$inject = ['$scope', '$stateParams', '$log', 'UserService', 'users', '$state'];

    function homeCtrl($scope, $stateParams, $log, UserService, users, $state) {
        /* jshint validthis: true */
        var vm = this;
        //vm.hi = $stateParams.hi;
        //vm.naieem = $stateParams.naieem;
        vm.items = ["A", "List", "Of", "Items"];
        vm.add = add;
        //console.log($state.current.name);
        //debugger;
        vm.item = "naieem";
        // UserService.get().then(function(v) {

        //         $scope.naieem = v;
        //     },
        //     function(e) {
        //         vm.naieem = e;
        //     });

        vm.naieem = users;
        vm.message = "hello world";
        //vm.hello = UserService.query({ id: "19" });
        //console.log(UserService.query({ id: "17" }));
        //vm.naieem = users;
        //console.log(vm.naieem);
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
            // this.name = $scope.item;
            // if (this.name != '') {
            //     vm.items.push(this.name);
            // } else {
            //     console.log("this is empty");
            // }
            //}
            this.user = {};
            this.user.user_name = "sdfd";
            this.user.user_password = "hello";
            this.user.user_email = "email";
            this.user.type = "type";
            //var GetUser = UserService.get();
            var save = UserService.PutUser(this.user);
            save.then(function(t) {
                console.log(t);
                //$scope.naieem = "sdfd";
                UserService.get().then(function(v) {
                        vm.naieem = v;
                    },
                    function(e) {
                        vm.naieem = e;
                    });


            }, function(e) {
                console.log(e);
            });
            // UserService.get().then(function(t) {
            //     $scope.naieem = t;
            //     console.log($scope.naieem);
            // }, function(e) {
            //     console.log(e);
            // });


            // var q = UserService.PutUser(this.user);
            // q.$promise.then(function(data) {
            //     //$scope.n = data;
            //     console.log(data);
            //     // Do whatever when the request is finished
            // });


        }
    }

    function prflCtrl() {
        this.name = "naieem";
    }

    function accCtrl() {
        this.name = "naieem";
    }
})();
