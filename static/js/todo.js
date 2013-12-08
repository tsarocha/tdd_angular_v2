// เพื่อ bind service
var todoApp = angular.module('todoApp', []); // [] คือ plugin ที่ใช้ เช่น ['firebase']
// 'ToDoService' > ประกาศชื่อ , TodoService ชื่อ class ที่ใช้ bind (เพื่อใช้สำหรับเวลา minify จะได้จับคู่ตัวแปรได้ไม่พัง)
todoApp.service('TodoService', TodoService);
injections = ['$scope', 'TodoService', ToDoController];
todoApp.controller('ToDoController', injections);

function ToDoController($scope, TodoService) {
	$scope.toDoList = "";

	$scope.load = function() {
		$scope.toDoList = TodoService.query();
	}	
	$scope.addToDo = function(title) {
		var newToDo = {title:title, isDone:false};
		$scope.toDoList.push(newToDo);
		$scope.newTitle = "";
	}
}

function TodoService() {
	this.query = function() {
		return [ 	{title:"learn angular", isDone:true},
					{title:"learn TDD", isDone:true},
					{title:"go home", isDone:false} ];
	}
}