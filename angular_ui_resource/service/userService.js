(function() {
    // controller calling the dataservice factory
    angular
        .module('health')
        .factory('UserService', UserService);

    UserService.$inject = ['$resource', '$q'];

    function UserService($resource, $q) {
        //return $resource('./api/users/:id', { id: '@id' });
        var userapi = $resource('./api/users/:id', { id: "@id" });

        var service = {
            get: get,
            PutUser: PutUser,
        };
        return service;

        function get() {
            //console.log(getvalue.query())

            //return userapi.get({ id: 17 });
            var q = $q.defer();
            userapi.query({}, function(v) {
                    q.resolve(v);
                },
                function(e) {
                    q.reject(e);
                });
            return q.promise;
        }

        function PutUser(user) {
            // new userapi(user).$save(function(val, res) {
            //     //console.log(user);
            //     var t = angular.toJson(val);
            //     console.log(val[0]);
            //     //console.log(val['user_email']);
            // });
            var t = $q.defer();
            userapi.save(user, function(v) {
                    t.resolve(v);
                },
                function(e) {
                    t.reject(e);
                });
            return t.promise;
            //return userapi.save(user);

            // t.$promise.then(function(data) {
            //     console.log(data);
            //     // Do whatever when the request is finished
            // });

            //return user;
        }
        // var vm = this;
        // vm.avengers = [];

        // activate();

        // function activate() {
        //     return getAvengers().then(function() {
        //         logger.info('Activated Avengers View');
        //     });
        // }

        // function getAvengers() {
        //     return dataservice.getAvengers()
        //         .then(function(data) {
        //             vm.avengers = data;
        //             return vm.avengers;
        //         });
        // }

    }
})()
