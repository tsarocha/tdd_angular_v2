function ToDoController($scope) {
	$scope.toDoList = [ {title:"learn angular", isDone:true},
						{title:"learn TDD", isDone:true},
						{title:"go home", isDone:false} ];


	$scope.addToDo = function(title) {
		var newToDo = {title:title, isDone:false};
		$scope.toDoList.push(newToDo);
		$scope.newTitle = "";
	}
}