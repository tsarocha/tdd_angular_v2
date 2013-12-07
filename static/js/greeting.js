// Code goes here
function GreetingController($scope) {
	// ค่า default
	$scope.name = 'tua';
	$scope.getName = function() {
		return $scope.name;
	}

	$scope.setName = function(name) {
		$scope.name = name;
	}

	$scope.clearName = function() {
		$scope.name = '';	
	}
};