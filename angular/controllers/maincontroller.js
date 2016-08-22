tasksApp.controller('maincontroller',maincontroller);
function maincontroller($scope,appConfig){
	$scope.userDetails = {
		"username":"Nirmal kumar",
		"email":"nirmal@comcast.com"
	}
	$scope.appConfig = appConfig;
}