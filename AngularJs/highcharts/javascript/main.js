var app=angular.module('myapp', ["highcharts-ng"]);

app.controller('myCtrl',function($scope){
$scope.highchart = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: "Hello to Devpura's world"
        },
        loading: false


}    
})
