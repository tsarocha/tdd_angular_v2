function ToDoController($scope) {
	$scope.toDoList = [ {title:"learn angular", checked:true},
						{title:"learn TDD", checked:true},
						{title:"go home", checked:false} ];

	$scope.getToDoList = function() {
		return $scope.toDoList;
	}

	$scope.addToDo = function() {
		var newToDo = {title:$scope.newTitle, checked:false};
		$scope.toDoList.push(newToDo);
		$scope.newTitle = "";
	}
}