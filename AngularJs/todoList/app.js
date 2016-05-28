var app= angular.module("myApp",[]);

app.controller("myCTRL",function($scope){
	$scope.data=['Gaurav','Chin2','Karan'];
	$scope.addName=function (){
		$scope.data.push($scope.newName);
		$scope.newName=" "
	}
	$scope.removeName=function(x){
		var i=$scope.data.indexOf(x);
		$scope.data.splice(i,1);
	}
})