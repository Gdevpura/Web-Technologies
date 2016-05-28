
angular.module('myApp', ['ui.router'])


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider


            .state('home', {
                url: '/home',
                templateUrl: 'Templates/home.html',
                controller: 'formController'
            })


            .state('home.step1', {
                url: '/step1',
                templateUrl: 'step1.html'
            })


            .state('home.step2', {
                url: '/step2',
                templateUrl: 'step2.html'
            })


            .state('home.step3', {
                url: '/step3',
                templateUrl: 'step3.html'
            });


        $urlRouterProvider.otherwise('/home/step1');
    })


    .controller('formController', function($scope) {

        $scope.names = ['Boston','New York','San Francisco','Chicago'];
        $scope.formData = {};




    });

